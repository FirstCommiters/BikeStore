import sequelize from '../config/sequelize'
import { DataTypes } from 'sequelize'

const bike = (sequelize, DataTypes) => {
    const Bike = sequelize.define('bike',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            unique: true
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Bike's color"
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
            comment: "How much the bike cost"
        }
    }, {freezeTableName: true})

    Bike.associate = function(models){
        
    }

    return Bike;
}


export default bike(sequelize, DataTypes)
