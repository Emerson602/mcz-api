import prisma from '../prisma/index.js';

class DeleteCustomerService {
  async execute(id) {
    await prisma.customer.delete({
      where: { id },
    });

    return { message: 'Cliente removido com sucesso' };
  }
}

export { DeleteCustomerService };
