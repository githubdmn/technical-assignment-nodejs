export default {
  environment: 'dev',
  host: process.env.DB_HOST,
  port: 3000,
  dbUse: process.env.DATABASE,
  pguser: process.env.POSTGRES_USER,
  pgpassword: process.env.POSTGRES_PASSWORD,
  pgport: process.env.POSTGRES_PORT,
  pgdb: process.env.POSTGRES_DB,
  jwtAccess: 'access',
  jwtRefresh: 'refresh',
  jwtSecret: 'secret',
};
