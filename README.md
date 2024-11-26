A simple command-line application to manage notes. The app allows users to add, remove, list, and read tasks using a terminal interface. It stores tasks in a JSON file for persistent storage.

Features
  - Add a new note: Add a note with a title and body.
  - Remove a note: Remove a note with a title.
  - List all notes: View all saved notes.
  - Read a note: Remove a note with a title.

-- Usage --

To add a new note:
node index.js add --title "Note Title" --body "Your note content goes here."

To remove a note:
node index.js remove --title "Note Title" 

To list all notes:
node index.js list

To read a note:
node index.js read --title "Note Title" 
