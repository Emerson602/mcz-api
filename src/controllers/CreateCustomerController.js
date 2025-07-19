import { CreateCustomerService } from '../useCases/CreateCustomerService.js';

class CreateCustomerController {
  async handle(req, res) {
    try {
      const data = req.body;
      const customerService = new CreateCustomerService();
      const customer = await customerService.execute(data);
      res.status(201).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar o cliente" });
    }
  }
}

export { CreateCustomerController };
