paypal.Buttons({

  createOrder: (data, actions) => {
    const price = document.getElementById("service").value;

    return actions.order.create({
      purchase_units: [{
        amount: { value: price }
      }]
    });
  },

  onApprove: async (data, actions) => {

    const details = await actions.order.capture();

    const booking = {
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      price: document.getElementById("service").value,
      orderID: data.orderID
    };

    console.log("BOOKING CONFIRMED:", booking);

    alert("Réservation confirmée ✔ Horizon Studio");
  }

}).render("#paypal-button-container");
