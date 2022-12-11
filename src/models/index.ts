import sequelize from '../config/sequelize';

const models = {

}


for (let key in models) {
    models[key].associate(models);
}

sequelize.sync({ force: false });

module.exports = models