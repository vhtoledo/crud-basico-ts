import { Router } from 'express';
import { deleteChofer, getChoferes, getChofer, postChofer, putChofer } from '../controllers/choferes';


const router = Router();

router.get('/', getChoferes);
router.get('/id', getChofer);
router.post('/', postChofer);
router.put('/id', putChofer);
router.delete('/id', deleteChofer);

export default router;
