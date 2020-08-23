import React , { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import {PageArea, Fake, OutherArea, BreadChumb} from './styled';
import useApi from '../../helpers/Api';

import { PageContainer } from '../../components/MainComponents';

import  AdItem from '../../components/partials/AdItem';


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
           
            {adInfo.category &&
             <BreadChumb>
                Voçê está aqui:
                <Link to="/">Home</Link>
                / 
                <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                / 
                <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                / {adInfo.title}
            </BreadChumb>
            }
          
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

            <OutherArea>
                {adInfo.others &&
                    <>
                        <h2>Outras Ofertas do vendedor</h2>
                            <div className="list">
                                {adInfo.others.map((i,k)=>
                                    <AdItem key={k} data={i}/>
                                )}
                            </div>
                    </>
                }
            </OutherArea>

        </PageContainer>
    );
}


export default Page;