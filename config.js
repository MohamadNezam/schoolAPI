const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: 'localhost',
    user:  'root',
	password: '',
    database:  'nodejs',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;