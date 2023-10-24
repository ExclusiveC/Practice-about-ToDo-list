const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [];

app.get('/', function(req, res){
    res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
    }
    res.redirect('/');
});

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});
