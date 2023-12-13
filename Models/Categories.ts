import sequelize from "./databaseConnection";
import { Model , DataTypes } from "sequelize";



class Categories extends Model{
    public id! : number 
    public categoryName! : string 
}

Categories.init({
    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    categoryName:{
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName : "categories",
})

export default Categories ;