require("dotenv").config({ path: "./config/example.env" });
const http = require("http");
const { success, error } = require("./utils/chalk");
const key = require("./config/keys.config");
const { PORT } = key;
const app = require("./app");
const assets = require("./config/static.config");

const port = PORT || 3000;

//assets set
assets();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(success(`server is running on http://localhost:${PORT}`));
});
