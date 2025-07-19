import prisma from '../prisma/index.js';

class ListCustomersService {
  async execute() {
    const customers = await prisma.customer.findMany();
    return customers;
  }
}

export { ListCustomersService };
