# federation2
Duplicate parallel calls to federated services

# start A1 service
1. cd A1
2. npm install
3. npm run start

🚀 A1 subgraph ready at http://localhost:4002/

# start V1 service
1. cd V1
2. npm install
3. npm run start

🚀 V1 subgraph ready at http://localhost:4001/

# start gateway service
1. npm install
2. npm run start

🚀 Server ready at http://localhost:4000/

# Query @ http://localhost:4000/graphql

query CurrentUserClients {
      viewer {
        user {
          user1
          user2
          id
          user3
          network {
                  id
              network1
          }
          user4
          user5
          user6
          user7
          user8
        }
        viewer1
        viewer2
        viewer3
    }
}

# Calls to both A1 and V1 field "user1" is missing in the call to V1
QueryPlan {
  Parallel {
    Fetch(service: "A1") {
      {
        viewer {
          user {
            user1
            user2
            id
            user3
            network {
              id
              network1
            }
            user4
            user5
            user6
            user7
            user8
          }
          viewer1
          viewer2
          viewer3
        }
      }
    },
    Fetch(service: "V1") {
      {
        viewer {
          user {
            user2
            id
            user3
            network {
              id
              network1
            }
            user4
            user5
            user6
            user7
            user8
          }
          viewer1
          viewer2
          viewer3
        }
      }
    },
  },
}