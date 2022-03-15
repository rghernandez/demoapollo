import mongoose from 'mongoose';


const schema = new mongoose.Schema(
    {
        theatherId:{type: Number},
        location:{
            address: {
                street: {type: String},
                city:{type: String},
                state: {type: String},
                zipcode:{type: Number},

            },
            geo:{
                type: {type: String},
                coordinates:{
                    0: {type: Number}, 
                    1: {type: Number}
                }
            }
        }

    }, {collection: 'theaters'})

    export default mongoose.model('Theaters', schema);