"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
class orders extends sequelize_1.Model {
}
orders.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    totalOrderPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    customerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    paymentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: databaseConnection_1.default,
    modelName: 'orders'
});
exports.default = orders;
