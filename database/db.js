const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("user_login", "root", "root123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
  /*dialectOptions: {
    ssl:'Amazon RDS'
  }*/
  ,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//console.log("db-->", db);

module.exports = db;
