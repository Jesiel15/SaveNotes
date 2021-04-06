const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jesiel15:jesielfaria15@cluster0.3i6vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Banco de dados conectado!");
})
mongoose.Promise = global.Promise;

module.exports = mongoose;
