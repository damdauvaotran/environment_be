module.exports = {
  name: process.env.DATABASE_NAME || 'math_app',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '12345678',
  url: process.env.DATABASE_URL || 'localhost',
  port: process.env.DATABASE_PORT || '3306',
};
