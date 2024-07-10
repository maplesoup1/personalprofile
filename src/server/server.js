const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/contactForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

// Mongoose schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    project: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', (res,req)=> {
    const newContact = new Contact(req.body);
    newContact.save((err)=> {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Contact saved successfully');
        }
    });
});

app.listen(port, ()=> {
    console.log('Server runnning on port ${port}')
});