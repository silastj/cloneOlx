import React, { useState, useEffect } from 'react';
import { SearchArea, PageArea, Logo, AllReact, LogoReact, PageContainerFooter ,PageAreaFooter } from './styled';

import { Link } from 'react-router-dom';

import useApi from '../../helpers/Api';

import { PageContainer} from '../../components/MainComponents';

import AdItem from '../../components/partials/AdItem';


const Page = () => {

    const api = useApi();
    //STATES
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ adList, setAdList] = useState([]);


        //Criamos a função getStates para pegar os estados
        useEffect(()=> {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
        }, []);

        //Função getCategories para categorias
        useEffect(()=> {
            const getCategories = async () => {
                const cats = await api.getCategories();
                setCategories(cats);
            }

        getCategories();
        }, []);

        //ADS
        useEffect(()=> {
            const getRecentAds = async () => {
                const json = await api.getAds({
                    sort:'desc',
                    limit:16
                });    
                setAdList(json.ads);           
            }
            getRecentAds();
        }, []);
  

    return(
                  

            <PageContainer>           
                <PageArea>

                   <div className="leftSide">
                       <form method="GET">
                           <input
                                type="text"
                                name="q"
                                placeholder="O que voçê procura?" />
                            <div className="filterName"><h3>Estado:</h3></div>

                            <select name="state">
                                <option>Selecione o estado</option>
                                {stateList.map((i,k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>

                            <div className="filterName"><h3>Categoria:</h3></div>
                            <ul>
                                {categories.map((i,k)=>
                                    <li key={k} className="categoryItem">
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>
                                )}

                            </ul>

                       </form>
                   </div>

                   <div className="rightSide">
                       Right
                   </div>
                </PageArea>
            </PageContainer>

  
     
     
         )
}

export default Page;