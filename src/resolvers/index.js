import {books, otherbooks, videos} from '../testdata'


//https://www.apollographql.com/docs/tutorial/resolvers.html


//define resolvers here

const resolve1 = {
    Queries: {
        books: () => [
            {
                title: 'Harry Potter and the Chamber of Secrets',
                author: 'J.K. Rowling',
            },
            {
                title: 'Jurassic Park',
                author: 'Michael Crichton',
            },
        ],
        otherbooks: () => otherbooks,
    },
    // Mutations: {
    //     field1: () => {}
    // }
};

const vidoeResolve = {
    Queries: {
        videoById: () => {
            //fieldName: (parent, args, context, info) => data



        }
    },
    // Mutations: {
    //     field2: () => {}
    // }
};

const resolvers = {
    Query: {
        ...resolve1.Queries,
        ...vidoeResolve.Queries,
    },
    // Mutation: {
    //     ...resolve1.Mutations,
    //     ...resolve2.Mutations,
    // }
};

export default resolvers;