import { Router } from 'express';
import { CreateCustomerController } from '../controllers/CreateCustomerController.js';
import { ListCustomersController } from '../controllers/ListCustomersController.js';
import { UpdateCustomerController } from '../controllers/UpdateCustomerController.js';
import { DeleteCustomerController } from '../controllers/DeleteCustomerController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = Router();

const create = new CreateCustomerController();
const list = new ListCustomersController();
const update = new UpdateCustomerController();
const remove = new DeleteCustomerController();

router.post('/', authenticateToken, (req, res) => create.handle(req, res));
router.get('/', authenticateToken, (req, res) => list.handle(req, res));
router.put('/:id', authenticateToken, (req, res) => update.handle(req, res));
router.delete('/:id', authenticateToken, (req, res) => remove.handle(req, res));

export default router;
