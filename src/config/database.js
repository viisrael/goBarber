module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgrespw',
  database: 'gobarber',
  port: 49153,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
