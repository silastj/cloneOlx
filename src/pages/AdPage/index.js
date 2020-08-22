import React , { useState } from 'react';
import { useParams } from 'react-router-dom';
import {PageArea, Fake} from './styled';
import useApi from '../../helpers/Api';

import { PageContainer } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();
    const {id} = useParams();

    // alert("ID "+id);

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);




    return (
        <PageContainer>
            <PageArea>

                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                                {loading && <Fake height={300}/>}
                        </div>
                        <div className="adInfo">
                            <div classname="adName">
                                {loading && <Fake height={20}/> }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={90}/> }
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