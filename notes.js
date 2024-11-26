const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
    notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notestoKeep.length) {
        saveNotes(notestoKeep)
        console.log(chalk.green.inverse('Note remove!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your note'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const currentNote = notes.find((note) => note.title === title)

    if(currentNote){
        console.log(chalk.blue(currentNote.title) + ' '+ currentNote.body)
    }else {
        console.log(chalk.red.inverse('No note found'))
    }
}

// ----- Fonction utile ----- 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    // try and catch , similar to if
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // no data
        return []
    }
}


// Exports permet d'appeler les fonctions dans un autre fichier
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}