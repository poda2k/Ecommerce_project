"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
const sequelize_1 = require("sequelize");
class Categories extends sequelize_1.Model {
}
Categories.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: databaseConnection_1.default,
    modelName: "categories",
});
exports.default = Categories;
