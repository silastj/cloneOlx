import styled from 'styled-components';

export const PageArea = styled.div`
    max-width:600px;
    box-shadow:0px 1px 4px #000;
    margin:0 10px;
    padding:10px;
    border-radius:20px 0px 40px 0px;


 .area{
     display:flex;
     align-items:center;
     margin:5px 0;
     max-width:500px;
 }
 .area--title{
     width:80px;
     text-align:right;
     margin-right:10px;
     font-weight:700;
     color:#000;
     font-size:12px;
 }
 .area--input{
     flex:1;   

     input{
     cursor:pointer;
     outline:0;     
 }
}

 .checkbox{
     margin:0;
 }
 .area.button{
    display: flex;
    align-items: center;
    justify-content: center;
 }
button{
    border:none;
    background-color:transparent;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;   
    padding:10px 30px;
    border:1px solid #ccc;
    border-radius:10px 0px 20px 0;
    cursor:pointer;
    text-transform:uppercase;
    letter-spacing:2px;
    outline:0;
}

`;