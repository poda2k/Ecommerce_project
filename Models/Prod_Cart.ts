import { Model, DataTypes } from "sequelize";
import sequelize from "./databaseConnection";

class Prod_Cart extends Model {
  public id!: number;
  public cart_Id!: number;
  public prod_Id!: number;
  public totalprice!: number;
  public quantity!: number;
  public isPurchased!: boolean;
}

Prod_Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    totalprice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isPurchased:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Prod_Cart",
  }
);

export default Prod_Cart;
