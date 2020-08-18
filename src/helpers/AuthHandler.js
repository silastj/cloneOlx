import Cookies from 'js-cookie';


// Verificar se está logado
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

//Fazer login , passando dois parametros
export const doLogin = (token, rememberPassword =  false) => {
    if(rememberPassword) {
        Cookies.set('token', token, { expires:999});
    }else {
        Cookies.set('token', token);
    }
}