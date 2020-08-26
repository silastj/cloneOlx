import styled from 'styled-components';


export const FooterArea = styled.div`
    max-width:1440px;
    margin:0 auto;
    position:relative;
    bottom:0px;
    left:0;
    width:98%;
    color:white;
    text-align:center;
    line-height:50px;
    height:50px;
    text-transform:uppercase;
    font-size:21px;
    font-weight:700px;
    letter-spacing:4px;
    border-radius:60px 60px 0 0;
    box-shadow: 0px 1px 4px #000;

    .footer-f ul{
        display: flex;
        justify-content: center;
        margin:0px;
        padding:0;
    }
    .footer-f ul li a{
        color:#394a27;
        font-size:12px;
        font-weight:700;
        transition: .3 ease-in-out;
        opacity:0.7;

        &:hover{
            transition: .3 ease-in-out;
            opacity:1;
        }
    }
    
`;