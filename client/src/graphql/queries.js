import { gql } from '@apollo/client';

export const GET_SHIPMENTS = gql`
  query GetShipments($status: String) {
    shipments(status: $status) {
      id
      origin
      destination
      status
      items {
        id
        name
        quantity
      }
    }
  }
`;
