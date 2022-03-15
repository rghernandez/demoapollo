import { gql } from 'apollo-server-express';



export default gql`
    type Query{
    allWeatherData: Weather!
    }
    
    type Weather {
        ts:  Date,
        position: position,
        elevation:  Int,
        callLetters:  String,
        qualityControlProcess:  String,
        dataSource:  Int,
        type:  String,
        airTemperature: airTemperature,
    }
    
    type airTemperature {
        
            value: Int,
            quality: Int
            
    
    }

    type position {
        type:  String,
        coordinates: [Int],
    }


`