const swaggerAutogen = require('swagger-autogen')();

const docs = {
	info: {
		title: 'Demo API',
		description: 'Demo API documentation',
	},
	host: 'localhost:3000',
	schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app'];

swaggerAutogen(outputFile, endpointsFiles, docs).then(() => {
	require('./app');
});
