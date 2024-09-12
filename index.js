const express = require('express');
const app = express();

app.use(express.json());

// Endpoint for text translation
app.post('/translate', (req, res) => {
    const { inputText } = req.body;

    // Basic validation to check if inputText is provided
    if (!inputText || typeof inputText !== 'string') {
        return res.status(400).json({
            message: "Invalid input. Please provide a valid text in English."
        });
    }

    // Simulating the translation process
    const translatedText = `Simulated translation of "${inputText}" to sign language.`;

    // Return success response
    res.status(200).json({
        message: "Translation successful!",
        originalText: inputText,
        translatedText: translatedText
    });
});

// Error handling for non-existing routes
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
