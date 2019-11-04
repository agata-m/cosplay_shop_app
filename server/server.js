const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/items', (req, res) => {
    const data = [
        {
            id: '123',
            name: 'EVA foam',
            description: 'Thick foam usually used for making big-size props',
        },
        {
            id: 'abc',
            name: 'Worbla',
            description: 'Termoplastic material used as a outside layer of props or armour',
        }
    ]
    res.json(data);
});

app.listen(8000, function() {
    console.log('Server is running on port: ', 8000);
});