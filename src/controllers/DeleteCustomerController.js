import { DeleteCustomerService } from '../useCases/DeleteCustomerService.js';

class DeleteCustomerController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const service = new DeleteCustomerService();
      const result = await service.execute(id);

      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao remover o cliente' });
    }
  }
}

export { DeleteCustomerController };
