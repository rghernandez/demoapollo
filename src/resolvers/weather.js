export default {
    Query:{
    allWeatherData: async(parent,args, { models }) => {
        return models.Weatherdata.find({});
    },
} 


}