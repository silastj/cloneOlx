import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
                                {loading && <Fake height={300}/>}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20}/> }
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={90}/> }
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box b-padding">
                        {loading && <Fake height={20}/>}
                    </div>
                    <div className="box b-padding">
                        {loading && <Fake height={20}/>}
                    </div>
                    
                </div>

            </PageArea>
        </PageContainer>
    );
}


export default Page;