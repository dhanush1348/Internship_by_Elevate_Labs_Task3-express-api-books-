const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(cors({ origin: 'http://localhost:5500' }));


// Dummy route
app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: 'Book One' },
    { id: 2, title: 'Book Two' }
  ]);
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { id, title, author } = req.body;
    if (!id || !title || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    books.push({ id, title, author });
    res.status(201).json({ message: 'Book added successfully' });
});

// PUT /books/:id - Update book by ID
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const { title, author } = req.body;
    const book = books.find(b => b.id == bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.json({ message: 'Book updated successfully' });
});

// DELETE /books/:id - Delete book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const index = books.findIndex(b => b.id == bookId);

    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(index, 1);
    res.json({ message: 'Book deleted successfully' });
});

// Start the server

