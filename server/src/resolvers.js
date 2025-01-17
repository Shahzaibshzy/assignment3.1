const shipments = [
    {
      id: '1',
      origin: 'New York',
      destination: 'Los Angeles',
      status: 'In Transit',
      items: [{ id: '101', name: 'Laptops', quantity: 10 }],
    },
    {
      id: '2',
      origin: 'Chicago',
      destination: 'Houston',
      status: 'Delivered',
      items: [{ id: '102', name: 'Furniture', quantity: 5 }],
    },
  ];
  
  const resolvers = {
    Query: {
      shipments: (_, { status }) => {
        return status
          ? shipments.filter(shipment => shipment.status === status)
          : shipments;
      },
      shipment: (_, { id }) => shipments.find(shipment => shipment.id === id),
    },
    Mutation: {
      updateShipmentStatus: (_, { id, status }) => {
        const shipment = shipments.find(shipment => shipment.id === id);
        if (shipment) {
          shipment.status = status;
          return shipment;
        }
        throw new Error('Shipment not found');
      },
    },
  };
  
  module.exports = resolvers;
  