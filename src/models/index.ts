import sequelize from '../config/sequelize';

import bike from './bike';

const models = {
    bike
}


// for (let key in models) {
//     models[key].associate(models);
// }

sequelize.sync({ force: false });

export default models