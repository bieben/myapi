const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { translateText } = require('./translationService');
require('dotenv').config();

const app = express();

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined')); // log details about each incoming request

// Endpoint for text translation
app.post('/translate', (req, res, next) => {
    try {
        const { inputText } = req.body;

        // Basic validation to check if inputText is provided
        if (!inputText || typeof inputText !== 'string') {
            return res.status(400).json({
                message: "Invalid input. Please provide a valid text in English."
            });
        }

        // Perform translation
        const translatedText = translateText(inputText);

        // Return success response
        res.status(200).json({
            message: "Translation successful!",
            originalText: inputText,
            translatedText: translatedText
        });
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "An unexpected error occurred. Please try again later."
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
