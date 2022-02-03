/**
 * /!\ Note sur la langue des commentaires :
 * Ce petit disclaimer fait partie du cours et sera toujours en français,
 * mais notez qu'à partir de maintenant le reste des commentaires tout au long
 * du code sera en anglais.
 * Ces commentaires sont copieux, pour des raisons pédagogiques. Souvent un
 * code propre parle de lui-même, et vous n'avez pas besoin vous-mêmes d'être
 * aussi bavards. Pour autant ne négligez pas l'importance des commentaires,
 * et rédigez-les toujours en anglais, comme le reste de votre code.
 */

const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];

/**
 * This function takes an array of orders, and applies to a given
 * percentage discount to all orders passed during the given month.
 *
 * /!\ The function mutates the original array of orders. No value is
 * returned.
 *
 * /!\ Oh! And... this piece of comments is called a "docblock". It precedes
 * generally a function to explain how things work: what the function does,
 * what types of arguments are needed, what value is returned, etc.
 * It has absolutely no effect on the code. It's just useful informations
 * for the developers.
 *
 * @param {Object[]} orders        Orders to be processed
 * @param {Number}   discountRate  Discount rate in percentage
 *                                 Example: 25
 * @param {Number}   monthNumber   Month number, starting from 0 to 11
 *                                 Example: 2 (for march)
 */
function applyDiscountOnMonth(orders, discountRate, monthNumber) {

  // Looping through all orders
  for (let i = 0; i < orders.length; ++i) {

    // Unix timestamp counts in seconds, but javascript's Date expects
    // milliseconds. So we have to convert seconds to milliseconds with a
    // multiplication by 1000
    const orderDate = new Date(parseInt(orders[i].timestamp) * 1000);

    // We will apply discount only if the order is from the month we expect
    if (orderDate.getMonth() === monthNumber) {

      // We convert the string to a float, then we apply the discount,
      // then we make it a string again, then we save it over the original
      // price value
      const floatPrice = parseFloat(orders[i].price);
      const discountedFloatPrice = floatPrice - floatPrice * discountRate / 100;
      orders[i].price = String(discountedFloatPrice);
    }
  }

}

// Remember that we have to start counting months from 0, so july is 6
applyDiscountOnMonth(orders, 20, 6);

console.log(orders);
