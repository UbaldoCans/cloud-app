const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DATABASE Conectada');
    } catch (error) {
        console.log('Wey hubo un error');
        console.log(error);
        process.exit(1); // detener la app
    }
}

module.exports = conectarDB;
