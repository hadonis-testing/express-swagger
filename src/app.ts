const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
	res.send('Hello World!');

	console.log('GET: /');
});

app.get('/items', (req: any, res: any) => {
	res.send('Items list');

	console.log('GET: /items');
});

app.post('/items', (req: any, res: any) => {
	res.status(201).send('Item created');

	console.log('POST: /items');
});

app.get('/items/:id', (req: any, res: any) => {
	res.send('Item details');

	console.log('GET: /items/:id');
});

app.put('/items/:id', (req: any, res: any) => {
	res.send('Item updated');

	console.log('PUT: /items/:id');
});

app.delete('/items/:id', (req: any, res: any) => {
	res.send('Item deleted');

	console.log('DELETE: /items/:id');
});

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
