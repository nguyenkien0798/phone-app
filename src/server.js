const jsonServer = require("json-server");
const auth = require("json-server-auth");
const moment = require("moment");

const server = jsonServer.create();
const router = jsonServer.router("./db/db.json");

const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = moment().valueOf();
    req.body.updatedAt = moment().valueOf();
  }

  if (req.method === "PUT") {
    req.method = "PATCH";
  }

  if (req.method === "PATCH") {
    req.body.updatedAt = moment().valueOf();
  }

  next();
});

server.use(auth);

server.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/orders" && Array.isArray(req.body.products)) {
    const updates = [];

    for (const orderProduct of req.body.products) {
      const product = server.db.get("products").find({ id: orderProduct.id });
      const currentProduct = product.value();
      if (!currentProduct) continue;

      const qty = Number(orderProduct.quantity || 0);
      const stock = Number(currentProduct.stock ?? 20);
      if (stock < qty) {
        return res.status(400).json({
          message: `${currentProduct.name} chỉ còn ${stock} sản phẩm`,
        });
      }
      updates.push({
        product,
        soldCount: (currentProduct.soldCount || 0) + qty,
        stock: stock - qty,
      });
    }

    updates.forEach(({ product, soldCount, stock }) => {
      product.assign({ soldCount, stock }).write();
    });
  }

  next();
});

server.use(router);
server.listen(4000);
