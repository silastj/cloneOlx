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
                    limit:8
                });    
                setAdList(json.ads);           
            }
            getRecentAds();
        }, []);
  

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                       
                            <select  name="state" required value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                                <option>Escolha o seu estado</option>
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
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                   
                </PageContainer>
            </SearchArea>


            <PageContainer>           
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=> 
                        <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver Todos</Link> 
                </PageArea>
            </PageContainer>

            <PageContainerFooter>           
                <PageAreaFooter>
                    <h2>Mais ReactJS</h2>            
                <AllReact>                                
                        <div className="OneReact primary">
                            <a href="https://devfoods.asilas.com.br/" target="_blank">
                                 <LogoReact src="/assets/img/devsfood-logo.png"/>
                            </a>
                        </div>
                        <div className="OneReact">
                            <a href="https://devfoods.asilas.com.br/" target="_blank">
                                    <LogoReact src="/assets/img/maisReactJS.png"/>
                                </a>
                        </div>
                    </AllReact>
                </PageAreaFooter>
            </PageContainerFooter>
        </>
     
         )
}

export default Page;