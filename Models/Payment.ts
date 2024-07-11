import { Model , DataTypes } from "sequelize";
import sequelize from "./databaseConnection";


class Payments extends Model{
    public id!:number;
    public customerId!:string;
    public paymentPrice!:number;
    public amount!:number;
    public paymentMethod!:string;
}

Payments.init({
    id:{
        type : DataTypes.INTEGER,
        allowNull : false ,
        primaryKey : true,
        autoIncrement : true
    },
    customerId:{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    paymentPrice:{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    amount:{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    paymentMethod:{
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName:'Payments'
});

export default Payments ;