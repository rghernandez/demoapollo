import mongoose from "mongoose"

const schema = new mongoose.Schema(
{
    "ts": { type: Date },
    "position": {
        "type": {type: String},
        "coordinates": [{
            type: Number
        }],
    },
    "elevation": {
                type: Number
            },
    "callLetters": {type: String},
    "qualityControlProcess": {type: String},
    "dataSource": {
                type: Number
            },
    "type": {type: String},
    "airTemperature": {
        "value": {
                type: Number
            },
        "quality": {
                type: Number
            }
    },
    "dewPoint": {
        "value":{
                type: Number
            },
        "quality": {
                type: Number
            }
    },
    "pressure": {
        "value": {
                type: Number
            },
        "quality": {
                type: Number
            }
    },
    "wind": {
        "direction": {
            "angle": {
                type: Number
            },
            "quality": {
                type: Number
            }
        },
        "type": {
                type: Number
            },
        "speed": {
            "rate": {
                type: Number
            },
            "quality":{
                type: Number
            }
        }
    },
    "visibility": {
        "distance": {
            "value": {
                type: Number
            },
            "quality": {
                type: Number
            }
        },
        "variability": {
            "value": {type: String},
            "quality":{
                type: Number
            }
        }
    },
    "skyCondition": {
        "ceilingHeight": {
            "value": {
                type: Number
            },
            "quality": {
                type: Number
            },
            "determination": {
                type: Number
            }
        },
        "cavok": {type: String}
    },
    "sections": [{type: String}],
    "precipitationEstimatedObservation": {
        "discrepancy":{
                type: Number
            },
        "estimatedWaterDepth": {
                type: Number
            }
    }
},{collection: 'data'});

export default mongoose.model('Weatherdata', schema);