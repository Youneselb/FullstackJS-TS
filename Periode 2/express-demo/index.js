 const express = require('express');
const app = express();

app.use(express.js());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 4, name: 'course3'},
    
];

app.get('/', (req,res) => {
res.send('Hello World');
});
app.get('/api/courses', (req,res) => {
res.send([1,2,3]);
});

app.get('/api/courses/:id', (req,res) => {
const course = courses.find(c => c.id === parseINT(req.params.id));
if (!course) res.status(404).send('The course was not found');
res.send(course)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));