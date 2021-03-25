const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")
const { string } = require("yargs")

yargs.version("1.1.0")

yargs.command({
    command: "modify",
    describe: "Modify notes!",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        newtitle: {
            describe: "new title",
            demandOption: true,
            type: "string"
        },
        newbody: {
            describe: "new body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        title = argv.title
        newtitle = argv.newtitle
        newbody = argv.newbody
        notes.modifyNotes(argv.title, argv.newtitle, argv.newbody)
    } 
})

yargs.command({
    command: "remove",
    describe: "Remove notes!",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        title = argv.title
        notes.removeNotes(argv.title)
    }

})



yargs.command({
    command: "list",
    describe: "List notes!",
    handler: function(){
        console.log("Running List command")
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "read notes!",
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Running read command")
        notes.readNotes(argv.title)
    }
})

yargs.command(
    {
        command: "add",
        describe: "Add a new note",
        builder: {
            title:{
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "Note body",
                demandOption: true,
                type:"string"
            }
        },
        handler: function(argv){
            console.log("Adding a new note...")
            //console.log("Title:" + argv.title)
            //console.log("Body:"+ argv.body)
            notes.addNote(argv.title,argv.body)
        }
        //handler: () =>{
        //    console.log("Adding a new note ...")
        //}
    }
)

// RETO NO. 3
// 1) Crear comando  para remover una nota, llamado "remove" sólo con 
// la opcion "title"
// 2) Crear en "notes.js" la función removeNote
// 3) Mandarla llamar en "app.js" dentro de la propiedad handler
// 4) En la función removeNote
//    --cargar las notas existentes
//    --usar un filter en el arreglo para encontrar si la nota si está 
//    --en el archivo, creando una lista con las notas que se desean
//    --mantener
// 5) Guardar la nueva lista de notas sobreescribiendo en el archivo con
//    la función saveNotes


yargs.parse()