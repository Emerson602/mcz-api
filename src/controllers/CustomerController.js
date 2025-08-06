import { ListCustomersService } from '../useCases/ListCustomersService.js';
import { CreateCustomerService } from '../useCases/CreateCustomerService.js';
import { UpdateCustomerService } from '../useCases/UpdateCustomerService.js';
import { DeleteCustomerService } from '../useCases/DeleteCustomerService.js';

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

export { ListCustomersController, CreateCustomerController, UpdateCustomerController, DeleteCustomerController };