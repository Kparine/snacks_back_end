const TABLE_NAME = 'snacks'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      name: 'Bread',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 1.00,
      is_perishable: true
    },
    {
      id: 2,
      name: 'Salami',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 2.00,
      is_perishable: true
    },
    {
      id: 3,
      name: 'Wine',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 3.00,
      is_perishable: true
    },
    {
      id: 4,
      name: 'Nuts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 4.00,
      is_perishable: true
    },
    {
      id: 5,
      name: 'Cheese',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 5.00,
      is_perishable: true
    },
    {
      id: 6,
      name: 'Fruit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: '',
      price: 6.00,
      is_perishable: true
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
