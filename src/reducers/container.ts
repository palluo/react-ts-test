
const container = (state = {}, action)  => {
    switch (action.type) {
        case 'ADD_CONTAINER':
        return {
            uid:action.uid,
            name:action.name,
            component:action.component
        }
        default:
        return state
    }
}

export default container