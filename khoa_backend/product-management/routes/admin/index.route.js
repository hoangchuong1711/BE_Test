const dashboarRoutes = require("./dashboar.route");
const productRoutes = require("./product.route");

const systemConfig = require("../../config/system");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboarRoutes);

  app.use(PATH_ADMIN + "/products", productRoutes);
};
