module.exports = {
    PORT: process.env.PORT || 3000,
    DB_PASSWORD: '138534',
    DATABASE_URL: process.env.DATABASE_URL 
      ? process.env.DATABASE_URL 
      : `mysql://root:138534@localhost/super_milhas`
  }