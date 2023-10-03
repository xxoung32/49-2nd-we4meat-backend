app.get('/order/:list', function (req, res) {
  var order = ['java', 'Nodejs is ...', 'Express is ...'];
  var output = `
  ${req.params.list}`;
});

app.get('/order/:list/:wallet');

req.params.list + ',' + req.params.wallet;

try {
} catch (error) {}

const orderId = req.params;

const { id, total_amount } = orderId;

const getOrderList = await dataSource.query(
  `SELECT id, total_amount FROM orders WHERE id = ${id}`,
);
if (없다면) {
  const error = new Error("CAN'T SEARCH ORDER DATA");
  error.statuscode = 502;
  throw error;
}
