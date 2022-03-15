import mongoose from "mongoose";

export default {
  Query: {
    movies: async (parent, args, {models}) => {
      if(args.limit=== undefined){
        const movies =  await models.Movie.find({});
       return {
         edges: movies ,
         pageInfo: {
          hasNextPage: false,
          endCursor:  edges[edges.length - 1].lastupdated.toString(),
        },
        };
      }
      // return models.Movie.find({}).skip(args.skip).limit(args.limit);
      const cursorOptions = args.cursor ? {lastupdated: {$gt: args.cursor}}: {};

      const movies= await models.Movie.find({...cursorOptions}).limit(args.limit+1).sort({lastupdated: 'asc'})
      
      
      const hasNextPage = movies.length > args.limit;
      const edges = hasNextPage ? movies.slice(0, -1) : movies;
      
      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: edges[edges.length - 1].lastupdated.toString(),
        },
      };
    },

    
    movie: async(parent,args, { models }) => {
        const {id} = args
        return models.Movie.findById(id);
    },
    allMovies: async(parent,args, { models }) => {
      return models.Movie.find({})
    },

    offset: async(parent,args, { models }) => {
     
      const movies= await models.Movie.find({}).skip(args.offset).limit(args.limit).sort({lastupdated: 'asc'})
      const edges = movies;
      return {
        edges,
        pageInfo:{
          hasNextPage:true,
          endCursor:edges[edges.length - 1].lastupdated.toString(),
        }
      }
    },
    available: async(parent,args, { models }) => {
      console.log(parent)
      if (args.available =="YES")
          return true;
      return false;
    }
  },



  Mutation:{
    createMovie: async (parent, args, {models}) => {
          const content = args.content
          const title = content.title
          const date = Date.now()
          const movie = {title: content.title, directors: content.directors, year: content.year, plot: "lorem ipsum dolor sit amet dolor", lastupdated:date,};
          try {models.Movie.collection.insertOne(movie);} catch (e){console.log("Already exist");}


        
          console.log(title)
          return models.Movie.findOne({title})
    },
    editMovie: async (parent,args,{ models}) => {
       
         const change = await models.Movie.find({title: args.title}).update({year: args.year, directors: args.directors, genres: args.genres})
        return change.acknowledged
    },
    deleteMovie: async (parent, args, {models}) => {
          const id = mongoose.Types.ObjectId(args.id)
          const res = await models.Movie.deleteOne({_id:id})
          console.log(res)
          if(res.deletedCount) return true;
          return false;
    },
  },
  Movie: {
      comments: async (parent, args, {models}) => {
          const id = mongoose.Types.ObjectId(parent.id)
          console.log(id)
          return await models.Comments.find({movie_id: id}).exec();
        },
      available: async (parent, args, {models}) => {
        console.log(parent)
        if(parent.plot!=null) 
          return "YES"
        return "NO"
      }
    },
   
}