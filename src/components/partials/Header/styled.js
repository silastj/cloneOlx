import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color:#ffffff;
    max-width:1440px;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;
    box-shadow: 0px 2px 2px 0px #0000004a;
    border-radius:0 0 4px 4px;
    padding:10px;
    color:#000;
   



    .container{
        max-width:1000px;
        height:auto;        
    }
    nav ul{
        display:flex;
    }
     li{
        margin: 0 10px;
    }
    a, button{
        transition: .3s ease-in;
        color:#000;
        background-color:transparent;
        border:none;
        cursor: pointer;      
    }
    button:focus{
            outline:0;
        }
    a:hover{
       
        transition: .3s ease-in;
    }
    .s-anunciar{
        background-color:#4E47B9;
        padding:10px 20px;
        border-radius:4px;
        color:#ffffff;
        font-weight:300;
        font-size:12px;
        text-transform:uppercase;
        letter-spacing: 2.5px;
    }
    .s-anunciar:hover{
        background-color:#0737E3;
    }
`;

export const Logo = styled.img`
    max-width:100%;
    
`;