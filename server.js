const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const contentRoute = require('./router/content')
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/images', express.static(path.join(__dirname, 'public/images')));


const db = require('./model')
db.sequelize.sync()

app.get('/', (req, ress) => {
    ress.send('Qiz Express JS');
});

app.use('/api/quiz', quizRoute)
app.use('/api/submit', jobsheetRoute)
app.use('/api/content', contentRoute)

app.listen(port, () => console.log(`App Listening on port ${port}`));