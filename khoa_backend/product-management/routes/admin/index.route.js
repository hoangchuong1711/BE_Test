const dashboarRoutes = require("./dashboar.route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboarRoutes);
};
