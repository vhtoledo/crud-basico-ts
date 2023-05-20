"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChofer = exports.putChofer = exports.postChofer = exports.getChofer = exports.getChoferes = void 0;
const chofer_1 = __importDefault(require("../models/chofer"));
const getChoferes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const choferes = yield chofer_1.default.findAll();
    res.json({ choferes });
});
exports.getChoferes = getChoferes;
const getChofer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const chofer = yield chofer_1.default.findByPk(id);
    if (chofer) {
        res.json(chofer);
    }
    else {
        res.json(404).json({
            msg: `No existe un chofer con el id ${id}`
        });
    }
});
exports.getChofer = getChofer;
const postChofer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield chofer_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email' + body.email
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.postChofer = postChofer;
const putChofer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const chofer = yield chofer_1.default.findByPk(id);
        if (!chofer) {
            return res.status(404).json({
                msg: 'No existe un chofer con el id' + id
            });
        }
        yield chofer.update(body);
        res.json(chofer);
    }
    catch (error) {
        console.log(error);
        res.json(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.putChofer = putChofer;
const deleteChofer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const chofer = yield chofer_1.default.findByPk(id);
    if (!chofer) {
        return res.status(404).json({
            msg: 'No existe un chofer con el id' + id
        });
    }
    yield chofer.update({ estado: false });
    // await chofer.destroy();
    res.json({
        msg: 'deleteChofer',
        id
    });
});
exports.deleteChofer = deleteChofer;
//# sourceMappingURL=choferes.js.map