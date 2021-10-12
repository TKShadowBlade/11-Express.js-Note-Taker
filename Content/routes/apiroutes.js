const fs = require ('fs');

module.exports = (app) => {
    app.get ('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            databaseData = JSON.parse(data);
            res.send(databaseData)
        });
    });

    app.post ('/api/notes', (req, res) => {
        const userNote = req.body;
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            databaseData = JSON.parse (data);
            databaseData.push (userNote);
            let number = 1;
            databaseData.forEach ((note, index) => {
                note.id = number;
                number++;
                return databaseData;
            });
              console.log (databaseData);
              
              stringData = JSON.stringify(databaseData);

              fs.writeFile('./db/db.json', stringData, (err, data) => {
                  if (err) throw err;
              });
        });
        res.send ('Thanks for your note!')
    });
}   
