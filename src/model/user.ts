import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/sequelize';

interface UserAttributes {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'email'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes{
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


User.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    sequelize,
})

export default User
