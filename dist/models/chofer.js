"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Chofer = connection_1.default.define('Chofer', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    dni: {
        type: sequelize_1.DataTypes.NUMBER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Chofer;
//# sourceMappingURL=chofer.js.map