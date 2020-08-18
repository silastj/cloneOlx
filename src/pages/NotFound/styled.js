import styled from 'styled-components';

export const NotFound = styled.div`
    position:fixed;
    top:15%;
    left: 50%;
    transform: translateX(-50%);
    max-width:900px;
    border-radius:0px 28px 0px 38px;
    box-shadow:0px 1px 11px #0000003b;
    padding:20px 80px;
    text-align:center;
    h1{
        font-size:18px;
    }
    a{
        font-size:16px;
        color:#394A26;
        font-weight: 300;
    }
`;

export const Back = styled.img`
    width:25px;
    height:auto;
    cursor:pointer;
`;