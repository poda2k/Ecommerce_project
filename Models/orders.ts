import { Model,DataTypes } from "sequelize";
import sequelize from "./databaseConnection" ;


class orders extends Model {
    public id!:number;
    public description!:string;
    public totalOrderPrice!:number;
    public customerId!:number ;
    public paymentId!:number;
}


orders.init({
    id:{
        type : DataTypes.INTEGER,
        allowNull : false ,
        autoIncrement : true,
        primaryKey : true
    },
    description:{
        type : DataTypes.STRING,
        allowNull : true
    },
    totalOrderPrice:{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    customerId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    paymentId:{
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    sequelize,
    modelName:'orders'
});

export default orders