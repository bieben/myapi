# My API
A back end API service

## Check Out: [MyAPI](https://bieben.github.io/myapi/)

## Initialization
```bash
npm i
```

## Run
```bash
node index.js
```

## Example
```bash
curl -X POST http://localhost:3000/translate -H "Content-Type: application/json" -d '{"inputText": "Hello"}'
```
Valid result:
```
{"message":"Translation successful!","originalText":"Hello","translatedText":"Simulated translation of \"Hello\" to sign language."}  
```
