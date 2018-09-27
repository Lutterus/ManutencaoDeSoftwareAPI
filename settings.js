module.exports = {
    PORT: process.env.PORT || 3000,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL 
      ? process.env.DATABASE_URL 
      : `mysql://root:${process.env.DB_PASSWORD}@localhost/super_milhas`
  }