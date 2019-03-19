import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import {getGrpcClientAsync} from './utils/grpc-client'
import {lookupServiceAsync} from './utils/lookup-service'


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
        grpcAPI: new getGrpcClientAsync(),
    })
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});