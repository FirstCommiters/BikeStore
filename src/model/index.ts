import user from './user';

const models = () => {
    user.sync({force: false});
}

export default models;

