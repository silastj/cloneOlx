import styled from 'styled-components';



export const PageArea = styled.div`
    max-width:1440px;
    box-shadow:0px 1px 4px #000;
    margin-top:10px;
    padding:10px;
    height:100%;
    margin:auto 20px;

    .seeAllLink{
        border: 1px solid #4E47B9;
        padding: 15px 60px;
        margin: 43px 0;
        background: #4E47B9;
        border-radius: 24px;
        color: #fff;
        font-weight: 700;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        text-transform:uppercase;
        transition: .3 ease;

        &:hover{
            transition: .3 ease;
            opacity: 0.7;
            color:#000;
            text-transform:uppercase;
        }
    }

    .list{
        display:flex;
        flex-wrap:wrap;
        background-color:#cccccc2e;
        padding:20px 10px;
        margin-bottom:40px;

        @media screen and (max-width:768px){
            justify-content: space-between;
                }

        .aditem{
            width:20%;
            padding: 10px;
            background: #fff;

            &:hover{
                box-shadow:0px 1px 4px #000;
            }

            @media screen and (max-width:768px){
                   width:45%;
                   margin: 0 5px 10px 0;
                }
            }
        }
    

`;

export const SearchArea = styled.div`    

`;

export const Logo = styled.img`
    width:10px;
    height:auto;
    
`;

export const AllReact = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:10px 0 32px 10px;

    @media screen and (max-width:425px){
        flex-direction:column;
    }

    .OneReact{
        width:45%;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:0px 1px 14px #0000001c;
        border-radius:60px 0 30px 0;
        padding:10px;

        @media screen and (max-width:425px){
            width:100%;
            min-height:199px;
            margin:30px auto;
        }
 
    }
    .OneReact.primary{
        background-color:#136713;
        box-shadow:0px 1px 14px #000;
    }
`;

export const LogoReact = styled.img`
    max-width:200px;
    height:auto;
`;

export const PageAreaFooter = styled.div`
    max-width:1440px;
    margin-top:10px;
    padding:10px;
    height:100%;
    margin:auto 20px;
`;

export const PageContainerFooter = styled.div`
    max-width:1440px;
    margin:0 auto;
    background: #e5e5e521;
    margin:60px auto;
`;
