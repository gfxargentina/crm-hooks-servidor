const mongoose = require ('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('DB Conectada');    
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
    }
}

module.exports = conectarDB;