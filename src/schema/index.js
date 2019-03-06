import { gql } from 'apollo-server'


// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  # This "Book" type can be used in other type declarations.
  
  type Book {
    title: String
    author: String
  }

  type User{
    userId: String
    firstName: String
    lastName: String
    email: String
    comments: CommentsList
  }
  
  type Rating{
    count: Int
    total: Int
  }
  
  type Ratings{
    ratings:[Rating]
  }
  
  type Comment{
    commentId: String
    comment: String
    addedDate: String
    author: String
  }
  
  type CommentsList{
    comments: [Comment]
  }
  
  type Stats {
    ratings: Ratings
    views: Int
  }
  
  type Suggestions{results:[String]}

  type UploadedVideo {
    videoId: String
    addedDate: String
    description: String
    location: String
    locationType: String
    name: String
    tags: [String]
    author: User
    previewImageLocation: String
    stats: Stats
    comments: CommentsList
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    otherbooks: [Book]
    videoById(videoId: String): UploadedVideo
    videoList: [UploadedVideo]
  }
`;


export default typeDefs;