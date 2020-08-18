import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound, Back } from './styled';


const Page = () => {
    return (
        <NotFound>
        
            <h1>Página não Encontrada!</h1>
            <Link to="/" >
                <Back src="/assets/img/back.png"/>
            </Link>
        
        </NotFound>
    )
}

export default Page;