//server.js
"use strict"; 
const express = require("express"); 
const app = express(); 
const fs = require("fs").promises; 
const multer = require("multer"); 
app.use(express.urlencoded({ extended: true })); app.use(express.json()); 
app.use(multer().none()); 
const PORT = process.env.PORT || 3000; app.listen(PORT, function () { console.log('Server listening on port: ' + PORT + "!"); });

app.get('/lookup/:word', async (req, res) => { try { let data = await fs.readFile("dictionary.json", "utf8"); let word = req.params.word; data = JSON.parse(data); 
    const key = word.toLowerCase(); 
    const definition = data[key]; 
    if (definition) { res.json({ word: word, definition: definition }); }
     else { res.send("No definition found. Consider POSTing"); } } 
     catch (err) { if (err.code === "ENOENT") 
        { res.status(500).send("file does not exist"); }
         else { 
            res.status(500).send("something went wrong on the server"); } } }); 
            app.post("/set/:word", async (req, res) => { const word = req.params.word; const definition = req.body.definition; 
                if (word && definition) { const key = word.toLowerCase(); 
                    try { let data = await fs.readFile("dictionary.json", "utf8"); 
                        data = JSON.parse(data); 
                        let definitionExists = data[key]; 
                        let response = ''; 
                        data[key] = definition; 
                        await fs.writeFile("dictionary.json", JSON.stringify(data)); 
                        if (definitionExists) { response = "updated definition for designated word"; } 
                        else { response = "added definition for designated word"; } 
                        res.send(response); } catch (err) { 
                            if (err.code === "ENOENT") { 
                                res.status(500).send("file does not exist"); } 
                                else { res.status(500).send("something went wrong on the server"); } } } 
                                else { res.status(400).send("Missing required parameters"); } });