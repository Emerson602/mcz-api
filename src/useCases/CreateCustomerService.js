import PrismaClient from "../prisma/index.js";

class CreateCustomerService {
  async execute(data) {
    const customer = await PrismaClient.customer.create({
      data: {
        name: data.name,
        description: data.description,
        category: data.category,
        openingHours: data.openingHours,
        night: data.night,
        day: data.day,
        contact: data.contact,
        address: data.address,
        img: data.img,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
