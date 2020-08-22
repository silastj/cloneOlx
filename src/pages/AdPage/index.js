import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import {PageArea, Fake} from './styled';
import useApi from '../../helpers/Api';

import { PageContainer } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();
    const {id} = useParams();

    // alert("ID "+id);

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    //PASSANDO id por PARAMETRO
    //PASSANDO true por PARAMETRO para pegar mais anuncios do vendedor
    useEffect(()=> {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            // console.log(json);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);


    const formatDate = (date) => {
        let cDate = new Date(date);

        let months =['janeiro', 'fevereiro', 'marco', 'abril', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro','dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }



    return (
        <PageContainer>
            <PageArea>

                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                                {loading && <Fake height={300}>Carregando ...</Fake>}
                                {adInfo.images &&

                                    <Slide>
                                        {adInfo.images.map((img, k)=>
                                            <div key={k} className="each-slide">
                                                <img src={img} alt=""/>
                                            </div>
                                        )}
                                    </Slide>
                                }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20}>Carregando ...</Fake> }
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={90}>Carregando ...</Fake> }
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
{/* 
                    <div className="rightSide twoMobile">
                    <div className="box b-padding">
                        {loading && <Fake height={20}>Carregando ...</Fake>}
                        {adInfo.priceNegotiable &&
                           "Preço Negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">Preço: <span>R${adInfo.price}</span></div>
                            
                        }
                        
                    </div>

                    {loading && <Fake height={20}/>}
                    {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactSellerLink">Fale com o vendedor</a>       
                            <div className="box b-padding">
                                    <h3>Criado por: <span><strong>{adInfo.userInfo.name}</strong></span></h3>
                                    <p>E-mail:{adInfo.userInfo.email}</p>
                            </div>
                        </>
                    
                    }
                   
                    
                </div> */}

                </div>
                <div className="rightSide twoDesktop">
                    <div className="box b-padding">
                        {loading && <Fake height={20}>Carregando ...</Fake>}
                        {adInfo.priceNegotiable &&
                           "Preço Negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">Preço: <span>R${adInfo.price}</span></div>
                        }
                        
                    </div>

                    {loading && <Fake height={20}/>}
                    {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactSellerLink">Fale com o vendedor</a>       
                            <div className="box b-padding">
                                    <p>Criado por: <span><strong>{adInfo.userInfo.name}</strong></span></p>
                                    <p>E-mail: <strong>{adInfo.userInfo.email}</strong></p>
                                    <p>Estado: <strong>{adInfo.stateName}</strong></p>
                            </div>
                        </>
                    
                    }
                   
                    
                </div>

            </PageArea>
        </PageContainer>
    );
}


export default Page;