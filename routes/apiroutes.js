// Dependencies
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('db/db.json'));



// Routing
module.exports = app => {
    
    
    
    app.get('/api/notes', (req, res) => {
        return res.json(db);
    });
    

    
    
    
    
    app.delete('/api/notes/:id', (req, res) => {
        const deleted = db.findIndex((i) => i.id == req.params.id);
        db.splice(deleted, 1);
        write();
        res.json(db);
    });

    
      app.post('/api/notes', (req, res) => {
        let note = req.body;
        db.push(note);
        write();
        res.json(db);
    });
    
    
    // Writefile func
    let write = () => {
        let writeDB = JSON.stringify(db);
        fs.writeFile('db/db.json', writeDB, err => { if (err) throw err });
    }
}