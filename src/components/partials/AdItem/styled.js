import styled from 'styled-components';


export const Item = styled.div`
    border:1px solid #0b2b0829;
    margin:0 15px 10px 0;
    cursor:pointer;
    border-radius:4px;
    background-color:#fff;

a{
    display:flex;
    flex-direction:column;
    color:#000;
}

.itemImage img{
    width:100%;
    border-radius:20px;    
}
.itemName{
    margin-top:5px;
    font-weight:700;
    text-transform:uppercase;
}
.itemPrice{
    font-weight:700;
    color:#7cb342;
    margin-top:5px;
    font-size:18px;
    letter-spacing:-1px;
}
`;