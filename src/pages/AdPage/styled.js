import styled from 'styled-components';



export const Fake = styled.div`
    background-color: #ddd;
    height:${props=>props.height || 20}px;
    margin-bottom:20px;
`;


export const PageArea = styled.div`
    display:flex;
    margin-top:20px;

    @media screen and (max-width:768px){        
            flex-direction:column;    
    }


    .box{
        background-color:#fff;
        border-radius:5px;
        box-shadow:0px 0.5px 3px #999;
        margin-bottom:20px;        
    }
    @media screen and (max-width:768px){
        .box{
            flex-direction:column;
        }

    }

 
    .leftSide{
        flex:1;
        margin-right:10px;

        .box{
            display:flex;
        }
        @media screen and (max-width:768px){
            .box{

                margin:10px 0 10px 10px;
            }
        }

        .adImage{
            width:320px;
            height:320px;
            margin-right:20px;
            border-radius:4px;
           

                .each-slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                border-radius:4px;
                height: 320px;
                padding: 40px;
                }
            
        }
        @media screen and (max-width:768px){
            .adImage{
                max-width:100%;
                width:100%;
            }
            .each-slide img {
                width:100%;
                object-fit:cover;
            }

    }

        
        .adInfo{
            padding:0 20px 0 0;
            flex:1;
                       
            .adName{
                margin-bottom:20px;

            }
            .adDescription {

                h2{
                    margin:0;
                    margin-top:20px;
                }
            }
        }

    }

    @media screen and (max-width:768px){
        .leftSide .adInfo{
                padding:10px;
            }

    .rightSide{
        width:250px;


        .price span{
            font-size:21px;
            font-weight:700;
            letter-spacing:1px;
        }
        .contactSellerLink{
            background-color:#b0a617;
            height:30px;
            border-radius:5px;
            display:flex;
            justify-content:center;
            align-items:center;
            box-shadow:0px 0px 1px #999;
            margin-bottom:20px;
        }
        .b-padding{
            padding:10px;
            

            p{
                font-size:16px;
            }
            p strong{
                font-size:14px;
            }
        }
    }
    @media screen and (max-width:768px){
        .rightSide{
            padding:10px;
            width:100%;
        }

    }
`;
export const OutherArea = styled.div`
    padding:10px;
    h2{
        font-size:20px;
    }

    .list{
        display:flex;
        flex-wrap:wrap;

        .aditem{
            width:20%;
        }

    }
    @media screen and (max-width:768px){
        .rightSide{
            padding:10px;
            width:100%;
        }
        .list{
            justify-content:space-between;
        }
        .list .aditem{
            width:45%;
            margin:0 0 10px 0;
        }

    }
`;

export const BreadChumb = styled.div`
    font-weight:bold;
    @media screen and (max-width:768px){
            padding:10px;
        }
`;
