const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require ('graphql');


// hardcoded data

// const customers = [
//     {id:'1', name:'Rajesh Yadav' , email:'rajeshyadav@gmail.com', age:30},
//     {id:'2', name:'Suresh Yadav' , email:'sureshyadav@gmail.com', age:35},
//     {id:'3', name:'Mukesh Yadav' , email:'mukeshyadav@gmail.com', age:33},
//     {id:'4', name:'Mahesh Pal' , email:'mahesh@gmail.com', age:38}
// ];



//CustomerType
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
});

//root query
const RootQuery  = new  GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type: CustomerType,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue, args){
                
                // for(let i=0; i<customers.length; i++){
                //     if(customers[i].id == args.id){
                //         return customers[i];
                //     }
                // }

                return axios.get('http://localhost:3000/customers/'+args.id)
                    .then(res => res.data);

            }
        },
        customers:{
            type:GraphQLList(CustomerType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers/')
                    .then(res => res.data);
            }
        } 
    }
});

//Mutaion
const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        addCustomer:{
            type: CustomerType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                email:{type: new GraphQLNonNull(GraphQLString)},
                age:{type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/customers/',{
                    name:args.name,
                    email:args.email,
                    age:args.age
                })
                    .then(res => res.data);
            }
        },
        deleteCustomer:{
            type: CustomerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/customers/'+args.id)
                    .then(res => res.data);
            }
        },
        editCustomer:{
            type: CustomerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                name:{type: GraphQLString},
                email:{type: GraphQLString},
                age:{type: GraphQLInt}
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/customers/'+args.id,args)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});