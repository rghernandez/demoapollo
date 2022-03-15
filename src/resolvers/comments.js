

export default {
    Query: {
      comments: async (parent, args, {models}) => {
        return models.Comments.find({});
      },
      comment: async (parent, args, {models}) => {
        
        const {id} = args
        return models.Comments.findById(id);
      },
    },
    
  };