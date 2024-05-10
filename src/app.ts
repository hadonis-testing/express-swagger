import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');

	console.log('GET: /');
});

app.get('/items', (req, res) => {
	res.send('Items list');

	console.log('GET: /items');
});

app.post('/items', (req, res) => {
	res.status(201).send('Item created');

	console.log('POST: /items');
});

app.get('/items/:id', (req, res) => {
	res.send('Item details');

	console.log('GET: /items/:id');
});

app.put('/items/:id', (req, res) => {
	res.send('Item updated');

	console.log('PUT: /items/:id');
});

app.delete('/items/:id', (req, res) => {
	res.send('Item deleted');

	console.log('DELETE: /items/:id');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
