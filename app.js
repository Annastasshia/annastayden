//  imports
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// static files
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// routes       
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});

//  Listen on port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
