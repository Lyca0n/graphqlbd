const Query = {
    users(parent, args, ctx, info) {
        return cts.db.users
    },
    faqs(parent, args, ctx, info) {        
        return ctx.db.faqs
    },
    abouts(parent, args, ctx, info) {        
        return ctx.db.abouts
    },
    events(parent, args, ctx, info) {        
        return ctx.db.events
    },
    registrations(parent, args, ctx, info) {        
        return ctx.db.registrations
    },
    ideas(parent, args, ctx, info) {        
        return ctx.db.ideas
    }
}

export {Query as default}