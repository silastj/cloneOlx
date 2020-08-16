import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea,Logo } from './styled';



const Header = () => {
    return(
        <HeaderArea>
           <div className="container">
                <Link to="/">
                    <Logo src="/assets/img/logoSale.png"/>
                </Link>
           </div>
           <nav>
               <ul>
                   <li>
                       <Link to="/">Login</Link>
                   </li>
                   <li>
                       <Link to="/">Cadastrar</Link>
                   </li>
               </ul>
           </nav>
        </HeaderArea>
    )
}

export default Header;