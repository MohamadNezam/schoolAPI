const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: 'freedb.tech',
    user:  'freedbtech_MHDNEZAM',
    password: 'm.h.d.nizam',
    database:  'freedbtech_SchoolManagementDB',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;