const jsonServer = require("json-server");
const itemsData = require("./data/items.json");

const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

server.get("/api/items", (req, res, next) => {
  res.status(200).send(itemsData);
});

server.post("/api/items", (req, res, next) => {
  // if no data is present
  if (!itemsData) {
    return;
  }

  // if no request body is present
  // TODO type check of json body needs to be added
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(200).send(itemsData);
    return;
  }

  // parse the body and get page params for filter and sort
  const { filter, sort } = req.body;
  const { key, value } = filter;
  const { sortBy, order } = sort;

  let finalItems = [];

  // filter
  if (key && value) {
    finalItems = itemsData.filter((item) => {
      let itemValue = item[key];

      // incase of string type convert value to lowercase
      if (typeof itemValue === "string") {
        itemValue = itemValue.toLowerCase();
        return itemValue.includes(value);
      }

      return itemValue === value;
    });
  }

  // Sort
  if (sortBy) {
    finalItems = finalItems.length === 0 ? itemsData : finalItems;

    finalItems = finalItems.sort((a, b) => {
      let x = a[sortBy];
      let y = b[sortBy];

      // incase of string type lowercase the value
      if (x instanceof String && y instanceof String) {
        x = x.toLowerCase();
        y = y.toLowerCase();
      }
      if (order === "asc" || order === "") {
        return x > y ? 1 : -1;
      }

      if (order === "desc") {
        return x < y ? 1 : -1;
      }
    });
  }

  res.status(200).send(finalItems);
});

server.listen(3000, () => {
  console.log("Json server listening on port 3000");
});
