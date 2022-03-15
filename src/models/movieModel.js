import mongoose from 'mongoose';


const schema = new mongoose.Schema(
    {
        plot:{
            type:String
        } ,
        genres:[{ type:String }],
        poster:[{ type:String }],
        runtime:{
            type:Number
        },
        fullplot:{type:String},
        cast:[{
            type: String
        }],
        num_mflix_comments:{
            type: Number
        },
        title:{
            type: String,
            unique:true
        },
        countries:[{
            type: String
        }],
        released:{
            type: Date
        },
        directors:[{
            type: String
        }],
        rated:{
            type: String
        },
        awards:{
            wins:{
                type: Number
            },
            nominations: {
                type: Number
            },
            text: {
                type: String
            }
        },
        lastupdated:{
            type: String
        },
        year: {
            type: Number
        },
        imdb:{
            rating: {
                type: Number
            },
            votes:{
                type: Number
            },
            id:{
                type: Number
            }
        },
        type: {
            type: String
        },
        tomatoes:{
            viewer:{
                rating: {
                    type: Number
                },
                numReviews:{
                    type: Number
                },
                meter:{
                    type: Number
                }
            },
            lastupdated: {
                type:Date
            }
        }
    
    
    }, {collection: 'movies'})

export default mongoose.model('Movie', schema);