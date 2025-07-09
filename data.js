const data = [
  {
    name: "Casa do caralho",
    nomeInfo: "Bem frequentado",
    openingHours: {
      Monday: '08:00 - 18:00',
      Tuesday: '08:00 - 18:00',
      Wednesday: '08:00 - 18:00',
      Thursday: '08:00 - 18:00',
      Friday: '08:00 - 18:00',
      Saturday: '08:00 - 10:00',
      Sunday: '08:00 - 10:00'
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