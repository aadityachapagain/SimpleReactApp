const initState = {
    posts:[
        {id: '1', title: 'let laid be laid on look of lust', body: 'Its always nice to have amazing wordplay by the side when you feel bored. It help you to fresh your mood jumpstart your brain and throttle any remaining bad mood swings'},
        {id: '2', title: 'Your argument is sound, nothing but sound', body: 'Here you go One of the epic word play by Benjamin Franklin my old friend was so afraid to lose world in the hand of illuminati which later findings prove that actually true :D'},
        {id: '3', title: 'Could you on this faire Mountaine leave to feed, And batten on this Moore?', body: 'Nevertheless our old queen Elizabeth II was always greate word player which was often hidden by her beauty of choosing word to strike the opponent right above their head and she was living peagent of that time with such great beauty and intelligence she will always be remembred through her execellence of English which some fellow British Man forget to count !'}
    ]
    ,
    todos:[
        {id: 1, content: 'Buy some Milk'},
        {id: 2, content: 'Play Mario cart'},
        {id: 3, content: 'Implement dota 2 spider'},
        {id: 4, content: 'Lannisters always pay their debt'}
      ]
}

const rootReducer = (state = initState, action ) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPosts
        }
    }

    if (action.type === 'ADD_TODO'){
        return {
            ...state,
            todos:[...state.todos, {id:Math.random(),content: action.todo}]
        }
    }

    if (action.type === 'DELETE_TODO'){
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        })
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export default rootReducer