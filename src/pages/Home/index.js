import React, { useState, useEffect } from 'react';
import { SearchArea, PageArea, Logo } from './styled';

import { Link } from 'react-router-dom';

import useApi from '../../helpers/Api';

import { PageContainer} from '../../components/MainComponents';


const Page = () => {

    const api = useApi();

    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);


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
  

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                       
                            <select  name="state" required value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                                <option>Selecione o Estado</option>
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
                    footer Santos
                </PageArea>
            </PageContainer>
        </>
     
         )
}

export default Page;