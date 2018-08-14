import books from '../testdata'

//define resolvers here

const resolve1 = {
    Queries: {
        books: () => books
    },
    // Mutations: {
    //     field1: () => {}
    // }
}

const resolve2 = {
    // Queries: {
    //     field4: () => {}
    // },
    // Mutations: {
    //     field2: () => {}
    // }
}

const resolvers = {
    Query: {
        ...resolve1.Queries,
        // ...resolve2.Queries,
    },
    // Mutation: {
    //     ...resolve1.Mutations,
    //     ...resolve2.Mutations,
    // }
}

export default resolvers;