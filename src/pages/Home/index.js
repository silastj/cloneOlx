import React, { useState, useEffect } from 'react';
import { SearchArea, PageArea, Logo } from './styled';

import useApi from '../../helpers/Api';

import { PageContainer} from '../../components/MainComponents';


const Page = () => {

    const api = useApi();

    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);

        //Criamos a função getStates para pegar os estados
        useEffect(()=> {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);
  

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                       
                        <select name="state" required value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                            <option></option>
                            {stateList.map((i, k)=> 
                                <option key={k} value={i.id}>{i.name}</option>
                            )}
                        </select>

                       
                            <input type="text" name="q" placeholder="O que está procurando?"/>
                            
                            <button>
                                <Logo src="/assets/img/lupa.svg"/>
                            </button>
                        </form>
                    </div>
                    <div className="categoryList"></div>
                   
                </PageContainer>
            </SearchArea>


            <PageContainer>           
            <PageArea>
                footer
            </PageArea>
            </PageContainer>
        </>
     
         )
}

export default Page;