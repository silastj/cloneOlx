import React, { useState , useEffect } from 'react';
import { PageArea } from './styled';

import useApi from '../../helpers/Api';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();


    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);

    const [ disabled, setDisabled] = useState(false);
    const [ error, setError ] = useState('');
    
    //Criamos a função getStates para pegar os estados
    useEffect(()=> {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        //VERIFICANDO SE A SENHA ESTÁ DIFERENTE -ERROR
        if(password !== confirmPassword) {
            setError('Senhas não batem');
             setDisabled(false);
            // setEmail('');
            // setPassword('');
            // setName('');
            return;
        }

        const json = await api.register(name, email, password, stateLoc);

        if(json.error){
            setError(json.error);
        }else {
            doLogin(json.token);
            window.location.href = "/";
        }
       //APÓS A VERIFICAÇÃO ELE DESBLOQUEIA OS CAMPOS E LIMPA OS VALUES
        // setDisabled(false);
        // setEmail('');
        // setPassword('');
        // setRememberPassword('');
    }

    return(
        <PageContainer>
           <PageTitle>Cadastro</PageTitle>
           <PageArea>
               {error &&
                <ErrorMessage>{error}</ErrorMessage>
               }

               <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                required
                                />
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input 
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                                />
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select required value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                                <option></option>
                                {stateList.map((i, k)=> 
                                    <option key={k} value={i.id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                required
                                />
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Confirma Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e=>setConfirmPassword(e.target.value)}
                                required
                                />
                        </div>
                   </label>


                   <label className="area button">
                        <button disabled={disabled}>Fazer Cadastro</button>
                   </label>
               </form>
           </PageArea>
        </PageContainer>
         )
}

export default Page;