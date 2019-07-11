import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import {getServiceClientAsync} from './services/factory'
import { initCassandraAsync } from './utils/cassandra';
import { withRetries } from './utils/promises';
import dse from 'dse-driver';



// export const cassandraConnection=lookupServiceAsync('studio');
// console.log(cassandraConnection)
// console.log(getGrpcClientAsync(cassandraConnection))


// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        grpcAPI: new getServiceClientAsync(),
        cassandra: new withRetries(initCassandraAsync, 20, 10, 'Could not initialize Cassandra keyspace', false)
    })
});

// client.execute('select * from dse_system.encrypted_keys')
//     .then(result => console.log('success %s', result.rows[0].email));

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});