const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shipment {
    id: ID!
    origin: String!
    destination: String!
    status: String!
    items: [Item!]!
  }

  type Item {
    id: ID!
    name: String!
    quantity: Int!
  }

  type Query {
    shipments(status: String): [Shipment!]!
    shipment(id: ID!): Shipment
  }

  type Mutation {
    updateShipmentStatus(id: ID!, status: String!): Shipment
  }
`;

module.exports = typeDefs;
