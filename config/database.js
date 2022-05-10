const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://augustocss:Acesso7@cluster0.xs72l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('\n.\n.\n Conectado ao Mongoose'))
    .catch((err) => console.log(err));