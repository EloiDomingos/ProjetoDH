const Sequelize = require("sequelize");
const dbConfig = require('./database/config/config.json');
const dbConn = new Sequelize(dbConfig.development);

dbConn.query("select * from .livros", Sequelize.QueryTypes.SELECT).then(
    data=> {
        console.log(data);
        dbConn.close();
    }
);