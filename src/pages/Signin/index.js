import React, { useState } from 'react';
import { PageArea } from './styled';

import useApi from '../../helpers/Api';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle,PageBody, ErrorMessage } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();

    const [email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [rememberPassword, setRememberPassword] = useState('');
    const [ disabled, setDisabled] = useState(false);
    const [ error, setError ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if(json.error){
            setError(json.error);
        }else {
            doLogin(json.token, rememberPassword);
            window.location.href = "/";
        }

    }

    return(
        <PageContainer>
           <PageTitle>Login</PageTitle>
           <PageArea>
               {error &&
                <ErrorMessage>{error}</ErrorMessage>
               }

               <form onSubmit={handleSubmit}>
                   <label className="area">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input 
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={e=>setEmail(e.target.value)}/>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}/>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Lembra Senha</div>
                        <div className="area--input">
                            <input 
                                type="checkbox"
                                className="checkbox"
                                disabled={disabled}
                                checked={rememberPassword}
                                onClick={()=>setRememberPassword(!rememberPassword)}/>
                        </div>
                   </label>

                   <label className="area button">
                        <button disabled={disabled}>Fazer Login</button>
                   </label>
               </form>
           </PageArea>
        </PageContainer>
         )
}

export default Page;