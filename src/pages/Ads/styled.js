import styled from 'styled-components';



export const PageArea = styled.div`
    max-width:1440px;
    box-shadow:0px 1px 4px #000;
    margin-top:10px;
    padding:10px;
    height:100%;
    margin: 0 auto;
    display:flex;


    .leftSide{
        width:250px;
        padding:0 10px 0 0;



        input{
            min-width: 222px;
            max-width: 400px;
            border: none;
            border: 1px solid #7A7A7A;
            border-radius:5px;
            height: 30px;
            outline: 0;
            color: #000000;
            cursor: pointer;
        }
        select{
            min-width: 222px;
            max-width: 400px;
            border: none;
            border: 1px solid #7A7A7A;
            border-radius:5px;
            height: 30px;
            outline: 0;
            color: #000000;
            cursor: pointer;
        }
       ul{
            padding: 0;
            display: flex;
            flex-direction:column;
            cursor: pointer;
       }
       ul li{
           margin-bottom:10px;
           display: flex;
           align-items: center;
       }
       ul li img{
           width:25px;
           height:25px;
           object-fit:cover;
           margin-right:5px; 
       }

       .categoryItem{
           padding:10px 0;
           border-radius:5px;
           transition: .3s ease;
       }
       .categoryItem:hover,
       .categoryItem:active{
           background-color:#7cb342;
           color:#fff;
           transition: .3s ease;
       }
    }




    .rightSide{
        flex:1;
        border:1px solid red;
    }
    .list{
        display:flex;
        flex-wrap:wrap;
        background-color:#cccccc2e;
        padding:20px 10px;

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
                }
            }
        }
    }

    @media screen and (max-width:768px){
        margin:auto 16px;
    }
`;

// export const SearchArea = styled.div`    

// `;

// export const Logo = styled.img`
//     width:10px;
//     height:auto;
    
// `;

// export const AllReact = styled.div`
//     width:100%;
//     display:flex;
//     justify-content:space-between;
//     padding:10px 0 32px 10px;

//     @media screen and (max-width:425px){
//         flex-direction:column;
//     }

//     .OneReact{
//         width:45%;
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         box-shadow:0px 1px 14px #0000001c;
//         border-radius:60px 0 30px 0;
//         padding:10px;

//         @media screen and (max-width:425px){
//             width:100%;
//             min-height:199px;
//             margin:30px auto;
//         }
 
//     }
//     .OneReact.primary{
//         background-color:#136713;
//         box-shadow:0px 1px 14px #000;
//     }
// `;

// export const LogoReact = styled.img`
//     max-width:200px;
//     height:auto;
// `;

// export const PageAreaFooter = styled.div`
//     max-width:1440px;
//     margin-top:10px;
//     padding:10px;
//     height:100%;
//     margin:auto 20px;
// `;

// export const PageContainerFooter = styled.div`
//     max-width:1440px;
//     margin:0 auto;
//     background: #e5e5e521;
//     margin:60px auto;
// `;
