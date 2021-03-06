import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://alunos.b7web.com.br:501';

//POST
const apiFetchPost = async (endpoint, body) => {

    //VERIFICAR SE TEM COOKIE, CASO NÃO TIVER ELE PEGA O COOKIE E ENVIA JUNTO COM EMAIL E SENHA
    if(!body.token) {
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
  


    const res = await fetch(BASEAPI + endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });

    const json = await res.json();

    //VEREFICA SE TEM AUTORIZAÇÃO PARA LOGAR
    if(json.notallowed) {
        window.location.href = "/signin";
        return;
    }
    // CASO CONTRARIO ELE RETORNA O JSON
    return json;
}

//GET
const apiFetchGet = async (endpoint, body = []) => {

    //VERIFICAR SE TEM COOKIE, CASO NÃO TIVER ELE PEGA O COOKIE E ENVIA JUNTO COM EMAIL E SENHA
    if(!body.token) {
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
 


    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    const json = await res.json();

    //VEREFICA SE TEM AUTORIZAÇÃO PARA LOGAR
    if(json.notallowed) {
        window.location.href = "/signin";
        return;
    }
    // CASO CONTRARIO ELE RETORNA O JSON
    return json;
}

//IMAGENS
const apiFetchFile = async(endpoint, body) => {

        //VERIFICAR SE TEM COOKIE, CASO NÃO TIVER ELE PEGA O COOKIE E ENVIA JUNTO COM EMAIL E SENHA
        if(!body.token) {
            let token = Cookies.get('token');
            if(token){
                body.append('token', token);
            }
        }
      
    
    
        const res = await fetch(BASEAPI + endpoint, {
            method:'POST',           
            body
        });
    
        const json = await res.json();
    
        //VEREFICA SE TEM AUTORIZAÇÃO PARA LOGAR
        if(json.notallowed) {
            window.location.href = "/signin";
            return;
        }
        // CASO CONTRARIO ELE RETORNA O JSON
        return json;
}

const Api = {

    login:async (email, password) => {
        //fazer consulta ao wb
        //http://alunos.b7web.com.br:501/

        //Criaremos uma função passando dois parametros(email e password)
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        )
        return json;    
    },

    // CADASTRAR O USUARIO
    register:async (name, email, password, stateLoc) => {
        
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state:stateLoc}
        );
        return json;
    },

    //LISTA DE DADOS
    getStates:async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    },

    //LISTA AS CATEGORIAS
    getCategories:async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.categories;
    },

    //LISTA DE ADS
    getAds:async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );
        return json;
    },

    //PAGINA UNICA AD 
    getAd:async (id, other = false) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id, other}
        );
        return json;
    },

    //IMAGENS
    addAd:async (fData) =>{
        const json = await apiFetchFile(
            '/ad/add',
            fData
        );
        return json;
    }

};


export default () => Api;