import styled from 'styled-components';



export const Fake = styled.div`
    background-color: #ddd;
    height:${props=>props.height || 20}px;
    margin-bottom:20px;
`;


export const PageArea = styled.div`
    display:flex;
    margin-top:20px;




    .box{
        background-color:#fff;
        border-radius:5px;
        box-shadow:0px 0.5px 3px #999;
        margin-bottom:20px;
    }
    .leftSide{
        flex:1;
        margin-right:10px;

        .box{
            display:flex;
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

`;
export const OutherArea = styled.div`
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
`;

export const BreadChumb = styled.div`
    font-weight:bold;

`;