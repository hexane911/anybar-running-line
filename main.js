const readNotes = require("./readNotes")
const shower = require("./show")
const sleep = require("./sleep")


const notes = readNotes('./test')

shower(notes)

