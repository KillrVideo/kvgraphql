const axios = require('axios');
const UUID =  require('graphql-tools-type-uuid');
const lookupServiceAsync =  require('./utils/lookup-service');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");


// console.log (lookupServiceAsync)

//Hardcoded data for testing
const users = [
    {key:'6cbe657c-63e3-11e6-aa83-080027e303e4', email:'jdoe@gmail.com',firstName:'John',lastName:'Doe'},
    {key:'8c3e657c-22c4-1226-aa83-282027230322', email:'sjohnson@gmail.com',firstName:'Sarah',lastName:'Johnson'},
    {key:'33be633c-33e3-1336-a333-033033e30333', email:'esmith@gmail.com',firstName:'Eric',lastName:'Smith'},
];


//Data schemas for queries
//falcor usersById[{ key:uuid }][ 'email', 'firstName', 'lastName' ]
const usersById = new GraphQLObjectType({
    name:'usersById', //something like table name in a database
    fields:() => ({ //these are like column definitions in a database
        key:{type:UUID},
        email:{type:GraphQLString},
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString},
    })
});

//Queries Think of these kind of like prepaird statements
//Root query
const userQuery = new GraphQLObjectType({
    name:'userQueryType', //name of the group of queries
    fields:{
        user:{ //name of the specific query
            type:'usersById', //define the schema element the query is for kinda like table name
            args:{ //the arguments the query can accept
                key:{type:UUID}
            },
            // get axios call data
            // resolve(parentValue, args){
            //     return axios.get('')
            //         .then(res => res.data);
            // }
            //Get static test data
            resolve(parentValue, args){ //the query that is being run.
                for(let i = 0; i< users.length; i++){
                    if (users[i].key == args.key){
                        return users[i]
                    }
                }
            }

        },
        users:{
            type:new GraphQLList(usersById),
            resolve(parentValue, args){
                return users;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:userQuery
});