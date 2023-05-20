"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const choferes_1 = require("../controllers/choferes");
const router = (0, express_1.Router)();
router.get('/', choferes_1.getUsuarios);
router.get('/id', choferes_1.getUsuario);
router.post('/', choferes_1.postUsuario);
router.put('/id', choferes_1.putUsuario);
router.delete('/id', choferes_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map