
export const LOGIN_SUCCEE = 'LOGIN_SUCCEE'
export const LOGIN = 'LOGIN'

export const loginSuccee = (userInfo) =>{
    // return {
    //     type:LOGIN_SUCCEE,
    //     userInfo:userInfo
    // }
}
export const login = (userName:string, password:string, callBack:()=>void) => {
   return {
       type: LOGIN,
       userName:userName,
       password:password,
       onSuccess:callBack||null
   }
}
