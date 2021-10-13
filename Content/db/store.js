const util = require ('util');
const fs = require ('fs');
const db = require ('./db.json');

// package for creating unique IDs
const uuid = require ('uuid');

const readFileAsync = util.promisify (fs.readFile);
const writeFileAsync = util.promisify (fs.writeFile);

class Store {
    read() {
        return readFileAsync ('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync ('db/db.json', JSON.stringify(note));
    }

    noteGet() {
        return this.read().then((notes) => {
            let noteParse;

            try {
                noteParse = [].concat (JSON.parse(notes));
            } catch (err) {
                noteParse = [];
            }
            return noteParse;
        });
    }
    
    // Where new note gets added t
    noteAdd(note) {
        const {title, text} = note;

        if (!title || !text) {
            throw new Error ('You must include title and text')
        };

    const newNote = {
        title,
        text,
        id: uuid.v1()
    };

    return this.noteGet()
    .then((notes) => [...notes, newNote])
    .then((noteUpdate) => this.write(noteUpdate))
    .then(() => newNote);
    }
    noteRemove(id) {
        return this.noteGet()
            .then((notes) => notes.filter((note) => note.id != id))
            .then((filterNote) => this.write(filterNote));
    }
}

module.exports = new Store();
