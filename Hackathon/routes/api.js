const express = require('express');
const router = express.Router();
const Directory = require('../models/Directory');
const File = require('../models/File');

// Create a new directory
router.post('/directory', async (req, res) => {
    try {
        const { name, parent } = req.body;
        const directory = new Directory({ name, parent });
        await directory.save();
        res.json(directory);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Create a new file
router.post('/file', async (req, res) => {
    try {
        const { name, content, directory } = req.body;
        const file = new File({ name, content, directory });
        await file.save();
        res.json(file);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get directory contents
router.get('/directory/:id', async (req, res) => {
    try {
        const directoryId = req.params.id;
        const directories = await Directory.find({ parent: directoryId });
        const files = await File.find({ directory: directoryId });
        res.json({ directories, files });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rename a directory or file
router.put('/rename/:type/:id', async (req, res) => {
    try {
        const { type, id } = req.params;
        const { newName } = req.body;
        if (type === 'directory') {
            await Directory.findByIdAndUpdate(id, { name: newName });
        } else {
            await File.findByIdAndUpdate(id, { name: newName });
        }
        res.send('Renamed successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete a directory or file
router.delete('/delete/:type/:id', async (req, res) => {
    try {
        const { type, id } = req.params;
        if (type === 'directory') {
            await Directory.findByIdAndDelete(id);
        } else {
            await File.findByIdAndDelete(id);
        }
        res.send('Deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
