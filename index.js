import express from "express";
import bodyParser from "body-parser"
import ejs from "ejs";

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render("index.html");
});

app.post('/', (req, res) => {
    const userInput = req.body.userInput;
    res.render('index', { userName: userInput });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});