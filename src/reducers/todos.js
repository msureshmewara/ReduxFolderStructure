const todos = (state = [], actions) => {
    switch (actions.type) {
        case 'ADD_TODO':
            return [...state, {
                id: actions.id,
                text: actions.text,
                completed: false
            }];
        case 'TOGGLE_TODO':
            return state.map(todos => (todo.id === actions.id)
                ? { ...todo, completed: !todo.completed } :
                todo);

        default:
            return state

    }
}

export default todos;