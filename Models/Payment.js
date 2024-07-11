"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConnection_1 = __importDefault(require("./databaseConnection"));
class Payments extends sequelize_1.Model {
}
Payments.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    paymentPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    paymentMethod: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: databaseConnection_1.default,
    modelName: 'Payments'
});
exports.default = Payments;
