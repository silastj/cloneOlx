import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea,Logo } from './styled';

import { isLogged } from '../../../helpers/AuthHandler';


const Header = () => {

    let logged = isLogged();

    return(
        <HeaderArea>
           <div className="container">
                <Link to="/">
                    <Logo src="/assets/img/logoSale.png"/>
                </Link>
           </div>
           <nav>
               <ul>
                   {logged &&
                   <>
                   <li>
                       <Link to="/my-account">Minha Conta</Link>
                   </li>
                   <li>
                       <Link to="/logout">Sair</Link>
                   </li>
                   <li>
                       <Link to="/" className="s-anunciar">Anunciar</Link>
                   </li>
                   </>
                    }
                   {!logged &&
                    <>
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Entrar</Link>
                        </li>
                    </>
                
                    }
               </ul>
           </nav>
        </HeaderArea>
    )
}

export default Header;