export const addToLikes = (post)=>({
    type:"ADD_LIKED_POST",
    post:post
})

export const removeFromLikes = (id)=>({
    type:"REMOVE_LIKED_POST",
    id:id
})

export const addBookmark = (post)=>({
    type:"ADD_BOOKMARK",
    post:post
})

export const removeBookmark = (id)=>({
    type:"REMOVE_BOOKMARK",
    id:id
})