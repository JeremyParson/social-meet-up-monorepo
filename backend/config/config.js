require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database":  process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres", 
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  },
  "test": {
    "username": "inwfqmprsbdiuc",
    "password": "673b892d3a9fa42fc0e4df660f25c7fe0d6b0c6a03cbedbd03979ec78bb22c2b",
    "database": "dbg9mqqjapl0nq",
    "host"    :  "ec2-3-223-213-207.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  },
  "production": {
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PASSWORD,
    "database": process.env.RDS_DATABASE,
    "host": process.env.RDS_HOSTNAME,
    "port": process.env.RDS_PORT,
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  }
}