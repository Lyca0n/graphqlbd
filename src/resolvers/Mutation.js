import uuidv4 from 'uuid/v4';

const Mutation = {
    async createIdea(parent, args, ctx, info) {        
        console.log(args);
        const idea = {
            id: uuidv4(),
            ...args.data
        }        
        return await ctx.models.Idea.create(idea)
    }
}

export { Mutation as default }