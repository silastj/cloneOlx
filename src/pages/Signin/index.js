import React from 'react';
import { PageArea } from './styled';

import { PageContainer, PageTitle,PageBody } from '../../components/MainComponents';


const Page = () => {
    return(
        <PageContainer>
           <PageTitle>Login</PageTitle>
           <PageArea>
               <form>
                   <label className="area">
                        <div className="area--title">Email</div>
                        <div className="area--input">
                            <input type="email"/>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password"/>
                        </div>
                   </label>

                   <label className="area">
                        <div className="area--title">Lembra Senha</div>
                        <div className="area--input">
                            <input type="checkbox" className="checkbox"/>
                        </div>
                   </label>

                   <label className="area button">
                        <button>Fazer Login</button>
                   </label>
               </form>
           </PageArea>
        </PageContainer>
         )
}

export default Page;