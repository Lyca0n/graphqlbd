import { GraphQLServer } from 'graphql-yoga';
import models, { db } from './db/db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Idea from './resolvers/Idea';


// Create tables
models.sequelize.sync({})
    .then(() => {
        console.info('INFO - Database sync complete.')

        console.info('SETUP - Starting server...')

    })
    .catch(() => {
        console.error('ERROR - Unable to sync database.')
        console.error('ERROR - Server not started.')
    })

models.Idea.create({ title: 'none' })
const server = new GraphQLServer({
    typeDefs: `./src/schema.graphql`,
    resolvers: {
        Query,
        Mutation,
        Idea,
    },
    context: {
        models,
        db
    }
});

server.start(() => {
    console.log('server up');
})