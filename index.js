const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
const useRoute = require('./routes/routes')

const app=express()
require("dotenv").config()

app.use(express.json())
app.use(cors())


app.use('/api/SchoolSystem', useRoute)

const PORT = process.env.PORT || 2000

const URI = process.env.ATLAS_URI

app.listen(PORT, (req, res) => {
    console.log(`connected to Port ${PORT}`)
})

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection esstablished Successfully"))
    .catch((error) => console.log("error in Connectivity", error.message))


