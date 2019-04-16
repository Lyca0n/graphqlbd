import uuidv4 from 'uuid/v4';

const Mutation = {
    createIdea(parent, args, ctx, info) {        
        console.log(args);
        const idea = {
            id: uuidv4(),
            ...args.data
        }

        ctx.db.ideas.push(idea);
        return idea;
    }
}

export { Mutation as default }