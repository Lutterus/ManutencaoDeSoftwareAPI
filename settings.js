module.exports = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL 
      ? process.env.DATABASE_URL 
      : 'mysql://mysql:senha@localhost:8024/supermilhas'
  }