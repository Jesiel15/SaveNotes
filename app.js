const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Configurar o Body parser
app.use(bodyParser.json());

// Configuração do MongoDB
mongoose.connect("mongodb+srv://jesiel15:jesielfaria15@cluster0.3i6vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Banco de dados conectado!");
})

// Carregando o model de produto
require("./models/Notes");
const Notes = mongoose.model("Notes");

// Endpoints Cadastro, Listagem, Listagem por ID e Delete
// Cadastro
app.post("/notes", (req, res) => {
    // Valida se os dados estao vazios
    // if (req.body.titleNoteText === undefined && req.body.noteText === undefined) {
    if (req.body.email != undefined)   {
    console.log(req.body.notes.titleNoteText)
        var notes = new Notes({
            email: req.body.email,
            notes: 
                {
                    titleNoteText: req.body.notes.titleNoteText,
                    noteText: req.body.notes.noteText,
                }
        });
        notes.save().then(() => {
            // Dado salvo com sucesso
            res.statusCode = 201;
            res.send();
        }).catch((erro) => {
            if (erro) {
                throw erro;
            }
            // Aconteceu alguma falha
            res.statusMessage = 417;
            res.send();
        })
    } else {
        res.statusCode = 406;
        res.send();
    }
})

// Listagem geral   
app.get("/notes", (req, res) => {
    Notes.find({}, (erro, dados) => {
        if (erro) {
            res.statusCode = 417;
            res.send();
        }
        res.json(dados);
        // console.log(JSON.stringify(dados));
        console.log(dados)
    })
})

// Listagem por ID
app.get("/note/:id", (req, res) => {
    Notes.findById(req.params.id).then((notes) => {
        res.statusCode = 200;
        res.json(notes);
    }).catch((erro) => {
        if (erro) {
            res.statusCode = 417;
            res.send();
            throw erro;
        }
    });
})

// Deletar
app.delete("/note/:id", (req, res) => {
    // Notes.findByIdAndRemove(req.params.id).then((notes) => {
    Notes.findByIdAndDelete(req.params.id).then((notes) => {
        if (notes) {
            res.statusCode = 200;
            res.send();
        } else {
            res.statusCode = 404;
            res.send();
        }
    }).catch((erro) => {
        if (erro) {
            res.statusCode = 417;
            res.send();
            throw erro;
        }
    });
});

app.listen(8080, () => {
    console.log("Api rodando!");
});