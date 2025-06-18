const express = require('express');
const router = express.Router();
const Book = require('../model/books');
const Author = require('../model/authors');
const Publisher = require('../model/publisher');
const auth = require("../middleware/auth")

// Create a new book
router.post('/',auth, async (req, res) => {
    try {
        // Check if author and publisher exist

        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Get all books
router.get('/', async (req, res) => {
    try {
        const allBooks = await Book.find().populate('author publisher') // Populate author name
        res.status(200).send(allBooks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author publisher');
        if (!book) {
            return res.status(404).send();
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a book by ID
router.put('/:id',auth, async (req, res) => {
        try {

            const data = await Book.findByIdAndUpdate(req.params.id, req.body).populate('author publisher');
            if (!data) {
                return res.status(404).send();
            }
            res.send(data);


        } catch (error) {
            
                res.send(error);

        }
})

// Delete a book by ID
router.delete('/:id',auth, async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Get books by author ID
router.get('/author/:authorId', async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.authorId }).populate('author publisher');
        if (!books.length) {
            return res.status(404).send();
        }
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get books by publisher ID
router.get('/publisher/:publisherId', async (req, res) => {
    try {
        const books = await Book.find({ publisher: req.params.publisherId }).populate('author publisher');
        if (!books.length) {
            return res.status(404).send();
        }
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;