const data = [
  {
    name: "Casa do baralho",
    description: "Bem frequentado",
    category: '',
    openingHours: {
      monday: '08:00 - 18:00',
      tuesday: '08:00 - 18:00',
      wednesday: '08:00 - 18:00',
      thursday: '08:00 - 18:00',
      friday: '08:00 - 18:00',
      saturday: '08:00 - 10:00',
      sunday: '08:00 - 10:00'
    },
    night: true,
    day: false,
    contact: [
      "8291234-5678"
    ],
    address: [
      {
        street: "Rua das Flores, 123",
        neighborhood: "Jacintinho",
        postalCode: "57000-000"
      }
    ],
    img: [
      "https://example.com/img1.jpg",
      "https://example.com/img2.jpg"
    ]
  }
];




const allData = [...data]

export default allData