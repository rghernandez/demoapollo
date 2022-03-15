import mongoose from "mongoose";

const uri = 'mongodb+srv://root:JPDRRWeZPCaGeMry@cluster0.bd1rc.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'

mongoose.connect(uri)
.then(() =>{
    console.log('Connected to mongodb 2')
}).catch(err => {
    console.error('Error connecting to mongodb 2', err)
})

