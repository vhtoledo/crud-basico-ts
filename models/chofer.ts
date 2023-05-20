import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Chofer = db.define('Chofer', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.NUMBER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    email: {
        type: DataTypes.STRING
    },
});

export default Chofer;