import { UpdateCustomerService } from '../useCases/UpdateCustomerService.js';

class UpdateCustomerController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const service = new UpdateCustomerService();
      const updatedCustomer = await service.execute(id, data);

      res.status(200).json(updatedCustomer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o cliente' });
    }
  }
}

export { UpdateCustomerController };
