"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const choferes_1 = require("../controllers/choferes");
const router = (0, express_1.Router)();
router.get('/', choferes_1.getChoferes);
router.get('/id', choferes_1.getChofer);
router.post('/', choferes_1.postChofer);
router.put('/id', choferes_1.putChofer);
router.delete('/id', choferes_1.deleteChofer);
exports.default = router;
//# sourceMappingURL=choferes.js.map