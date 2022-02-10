const { ApolloServer  } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/mongodb');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

// Conectar a la base de datos
conectarDB();

// servidor
const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: ({req}) => {
        // console.log(req.headers['authorization'])

        //console.log(req.headers);

        const token = req.headers['authorization'] || '';
        if(token) {
            try {
                const usuario = jwt.verify(token, process.env.SECRETA );
                console.log(usuario);
                return {
                    usuario
                }
            } catch (error) {
                console.log('Hubo un error');
                console.log(error);
            }
        }
    }
});

// arrancar el servidor
server.listen({ port: process.env.PORT || 9090 }).then( ({url}) => {
    console.log(`Servidor listo y escuchando en la URL ${url}`)
} )