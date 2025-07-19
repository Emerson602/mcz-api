import prisma from '../prisma/index.js';

class UpdateCustomerService {
  async execute(id, data) {
    const updated = await prisma.customer.update({
      where: { id },
      data,
    });
    return updated;
  }
}

export { UpdateCustomerService };
