const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const port = 4000

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'V1', url: 'http://localhost:4001/'},
    { name: 'A1', url: 'http://localhost:4002/'}
  ],
  debug: true
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
