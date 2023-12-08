const mongoose = require('mongoose')
import 'dotenv/config'

const connectionString = process.env.CONNECTION_MONGOOSE

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));