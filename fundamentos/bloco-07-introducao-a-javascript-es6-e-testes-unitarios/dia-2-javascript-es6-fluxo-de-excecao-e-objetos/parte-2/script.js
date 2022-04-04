const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber},${order.address.street},N.:${order.address.number},AP:${order.address.apartment}`;
};

customerInfo(order);
console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const bebida = Object.keys(order.order.drinks);
  order.payment.total = 50;

  console.log(pizzas);
  return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida[0]} é ${order.payment.total} `;
};

console.log(orderModifier(order));
