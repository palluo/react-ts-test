const serviceIP1 = 'http://192.168.1.47:8080/dgpTJ-server-web/rest/'

const API = {
    loginEncryption:`${serviceIP1}security/v1/rsa/encrypt/`,
    loginControllerLogin:`${serviceIP1}users/v1/logincheck/`
}

export {API}