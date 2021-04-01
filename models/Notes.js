const mongoose = require("mongoose");
// Notes
/*
    Titulo
    Anotação
*/

// mongoose.model(
//     "Notes",
//     {
//         titleNoteText: { type: String },
//         noteText: { type: String },
//     }
// );


mongoose.model(

    "Notes",
    {
        email: { type: String },
        notes: {             
            titleNoteText: { type: String },
            noteText: { type: String },
           
        }
    }

);