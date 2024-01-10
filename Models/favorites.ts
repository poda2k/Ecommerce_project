import {DataTypes , Model} from 'sequelize' ;
import sequelize from './databaseConnection' ;


class favorites extends Model{
    public id! : number ;
    public user_id! : number ;
    public product_id! : number ;
    public is_purchased! : boolean ;
}

favorites.init({
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false ,
        autoIncrement : true
    },
    user_id: {
        type : DataTypes.INTEGER,
        allowNull : false ,
    },
    product_id: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    is_purchased: {
        type : DataTypes.BOOLEAN, 
    }
},{
    modelName : "favorites",
    sequelize
});

export default favorites;