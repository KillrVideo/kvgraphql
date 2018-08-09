
import books from './testdata'

const resolvers = {
    //defign queries here
    Query: {
        books: () => books,
    },
};

export default resolvers;