const jsonServer = require("json-server");
const itemsData = require("./data/items.json");

const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

server.get("/api/items", (req, res, next) => {
  res.status(200).send(itemsData);
});

server.listen(3000, () => {
  console.log("Json server listening on port 3000");
});
