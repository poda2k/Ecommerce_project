import {Model,DataTypes} from "sequelize";
import sequelize from "./databaseConnection" ;

class prod_Order extends Model {
    public id!: number;
    public description!:string;
    public price!: number;
    public quantity!: number;
}

prod_Order.init({
    id:{
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    description:{
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    sequelize,
    modelName: "prod_Order"
});

export default prod_Order;