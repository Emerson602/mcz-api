import { ListCustomersService } from '../useCases/ListCustomersService.js';

class ListCustomersController {
  async handle(req, res) {
    try {
      const service = new ListCustomersService();
      const customers = await service.execute();
      res.status(200).json(customers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
  }
}

export { ListCustomersController };
