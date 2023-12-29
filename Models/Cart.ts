import {Model , DataTypes} from 'sequelize' ;
import sequelize from './databaseConnection';

class Cart extends Model {
    public id!: number
    public user_id!: number
    public Is_purchased! : boolean
}

Cart.init({

    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    user_id :{
        type : DataTypes.INTEGER,
        allowNull : false 
    },
    Is_purchased :{
        type : DataTypes.BOOLEAN,
        allowNull : false
    }

},{
    sequelize ,
    modelName : "Cart"
})

export default Cart ;