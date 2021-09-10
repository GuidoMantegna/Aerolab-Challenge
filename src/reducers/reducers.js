// Create the initial state for the first time the reducer runs
const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
}

// Declare the reducer which takes an initial state and an action and returns the state.
const rootReducer = (state = initState, action) => {
    // check the action.type which receives from deletePost (which dispatch and action)
    if(action.type === 'DELETE_POST') {
        // Delete the choosen id from state.posts
        let newPosts = state.posts.filter(post => post.id !== action.id)
        // Return a new state
        return {
            ...state,
            posts: newPosts
        }
    }
    return state 
}

// Export the reducer
export default rootReducer