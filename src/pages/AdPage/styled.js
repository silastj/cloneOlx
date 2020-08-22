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
        box-shadow:0px 4px #999;
        margin-bottom:20px;
    }
    .leftSide{
        flex:1;
        margin-right:10px;
        

        .adImage{
            
        }
        .adInfo{
            padding:0 10px;

            .adName{
                margin-bottom:20px;

            }
            .adDescription {

            }
        }

    }


    .rightSide{
        width:250px;



        .b-padding{
            padding:10px;
        }
    }

`;