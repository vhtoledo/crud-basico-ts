"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChofer = exports.putChofer = exports.postChofer = exports.getChofer = exports.getChoferes = void 0;
const getChoferes = (req, res) => {
    res.json({
        msg: 'getChoferes'
    });
};
exports.getChoferes = getChoferes;
const getChofer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getChofer',
        id
    });
};
exports.getChofer = getChofer;
const postChofer = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postChofer',
        body
    });
};
exports.postChofer = postChofer;
const putChofer = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postChofer',
        body
    });
};
exports.putChofer = putChofer;
const deleteChofer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteChofer',
        id
    });
};
exports.deleteChofer = deleteChofer;
//# sourceMappingURL=choferes.js.map