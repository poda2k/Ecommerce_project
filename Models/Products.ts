import sequelize from "./databaseConnection";
import { Model, Sequelize, DataTypes } from "sequelize";

class Products extends Model {
  public id!: number;
  public admin_id!: number;
  public cat_id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public quantity!: number;
  public imageUrl!: string;
  public color!: string;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export default Products;
