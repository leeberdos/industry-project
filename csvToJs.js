const papaparse = require("papaparse");
const fs = require("fs");
const file = fs.createReadStream("./custData.csv");

// Parse local CSV file
papaparse.parse(file, {
  header: true,
  complete: function (results) {
    let parse = [...results.data];

    let newCustomers = parse.map((customer) => {
      let newCustomer = {
        firstName: customer["First Name"],
        lastName: customer["Last Name"],
        email: customer["Email"],
        phoneNumber: customer["Phone Number"],
        lastOrder: customer["Last Order"],
        orderPrice: customer["Order Price"],
      };

      return newCustomer;
    });
    console.log(newCustomers);
  },
});
