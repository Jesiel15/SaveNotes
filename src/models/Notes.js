const mongoose = require("mongoose");

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
