// pulls in express npm package
const express = require('express');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

// activates express for use in coding
const app = express();

// Sets up a port for data pasage
const PORT = process.env.port || 3003;

// Middleware data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Opens the port to accept requests
app.listen(PORT, () => {
    console.log (`Listening on port: ${PORT}`);
})