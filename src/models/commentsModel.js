import mongoose from 'mongoose';


const schema = new mongoose.Schema(
    {
       name:{type:String},
       email:{type:String},
       movie_id:{type: mongoose.Types.ObjectId},
       text:{type:String},
       date:{type:Date}
    
    
    }, {collection: 'comments'})

export default mongoose.model('Comments', schema);