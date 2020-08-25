import React, { useState, useEffect } from 'react';
import { SearchArea, PageArea, Logo, AllReact, LogoReact, PageContainerFooter ,PageAreaFooter } from './styled';

import { useLocation, useHistory } from 'react-router-dom';

import useApi from '../../helpers/Api';

import { PageContainer} from '../../components/MainComponents';

import AdItem from '../../components/partials/AdItem';


let timer;


const Page = () => {

    const api = useApi();
    //STATES

    const history = useHistory();
   

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    }    

    const query = useQueryString();

    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ adList, setAdList] = useState([]);

    const [ resultOpacity, setResultOpacity] = useState(1);

    //Campo de busca
    const getAdsList = async () => {
        const json = await api.getAds({
            sort:'desc',
            limit:100,
            q,
            cat,
            state
        })
        setAdList(json.ads);
        setResultOpacity(1);
    }



        //monitorando as state (q - cat - state)

        useEffect(()=> {

            //criando um array vazio para juntar todas com templatestring
            let queryString = [];
                if(q){
                    queryString.push(`q=${q}`);
                }

                if(cat){
                    queryString.push(`cat=${cat}`);
                }
                if(state){
                    queryString.push(`state=${state}`);
                }

                //juntar todas com templatestring
                    history.replace({
                        search:`?${queryString.join('&')}`
                    });

                if(timer){
                    clearTimeout(timer);
                }

                timer = setTimeout(getAdsList, 2000);
                setResultOpacity(0.3);

        }, [q, cat, state]);

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
        // useEffect(()=> {
        //     const getRecentAds = async () => {
        //         const json = await api.getAds({
        //             sort:'desc',
        //             limit:16
        //         });    
        //         setAdList(json.ads);           
        //     }
        //     getRecentAds();
        // }, []);
  

    return(
                  

            <PageContainer>           
                <PageArea>

                   <div className="leftSide">
                       <form method="GET">
                           <input
                                type="text"
                                name="q"
                                placeholder="O que voçê procura?"
                                value={q}
                                onChange={e=>setQ(e.target.value)}
                                />
                            <div className="filterName"><h3>Estado:</h3></div>

                            <select name="state" value={state} onChange={e=>setState(e.target.value)}>
                                <option>Selecione o estado</option>
                                {stateList.map((i,k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>

                            <div className="filterName"><h3>Categoria:</h3></div>
                            <ul>
                                {categories.map((i,k)=>
                                    <li 
                                        key={k}
                                        className={cat===i.slug?'categoryItem active':'categoryItem'}
                                        onClick={()=>setCat(i.slug)}>
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>
                                )}

                            </ul>

                       </form>
                   </div>

                   <div className="rightSide">
                       <h2>Resultados</h2>
                       <div className="list" style={{opacity:resultOpacity}}>
                            {adList.map((i,k)=>
                                <AdItem key={k} data={i}/>
                            )}
                       </div>
                   </div>
                </PageArea>
            </PageContainer>

  
     
     
         )
}

export default Page;