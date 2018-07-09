import { LOGIN_SUCCEE } from 'actions/login'

const initState = {
    userInfo:{}
}

const login = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCEE: {
            return {...state, userInfo:action.userInfo}
        }
        default: {
            return state
        }
            
    }
}

export default login