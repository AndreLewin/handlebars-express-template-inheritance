const express = require('express');
const exphbs = require('express-handlebars');
const layouts = require('handlebars-layouts');
const path = require('path');

const app = express();

// Get the Handlebars instance
const handlebars = require('handlebars');

// Register the handlebars-layouts helpers with the Handlebars instance
handlebars.registerHelper(layouts(handlebars));

// Create the express-handlebars instance with the Handlebars instance
const hbs = exphbs.create({
  handlebars: handlebars,
  layoutsDir: 'views/layouts' // Set the layouts directory
});

// Register the engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', { title: 'the title', variable: 23, layout: 'main' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});