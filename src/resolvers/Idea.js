const Idea = {
    proposer(parent, args, { db }, info) {
        return db.users.find((user) => {
            return user.id == parent.proposer;
        })
    }
}

export {Idea as default}