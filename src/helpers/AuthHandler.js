import Cookies from 'js-cookie';


// Verificar se está logado
export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}