module.exports = {
    PORT: process.env.PORT || 3000,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL 
      ? process.env.DATABASE_URL 
      : 'mysql://root:sDeX695SpDGpLXWq@localhost/super_milhas'
  }