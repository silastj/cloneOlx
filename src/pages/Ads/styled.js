import styled from 'styled-components';



export const PageArea = styled.div`
    max-width:1440px;
    box-shadow:0px 1px 4px #000;
    margin:10px 0;
    padding:10px;
    height:100%;
    margin: 0 auto;
    display:flex;

    @media screen and (max-width:768px){
            flex-direction:column;
        }


    .leftSide{
        width:250px;
        padding:0 10px 0 0;

        @media screen and (max-width:768px){
            padding:5px;
            width:100%;
        }

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

            @media screen and (max-width:768px){
                width:100%;
                max-width: 100%;
        }

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
            @media screen and (max-width:768px){
                 width:100%;
                 max-width: 100%;
        }
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
        .categoryItem.active{
            background-color:#7cb342;
            color:#fff;
            transition: .3s ease;
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

    .rightSide{
        flex:1;
        @media screen and (max-width:768px){
                   padding:5px;
                }
        
        h2{
            margin:0 0 10px 0;
        }

        .list{
            display:flex;
            flex-wrap:wrap;

            @media screen and (max-width:768px){
                    justify-content: space-between;
                }
               

            .aditem{
                width:20%;

                @media screen and (max-width:768px){
                    width:45%;
                    justify-content: space-between;
                    margin:0 0 10px 0;
                }
            }
        }
        .listWarning{
                    padding:30px;
                    text-align:center;
                }
        .pagination{
            display:flex;
            align-items:center;
            justify-content:center;

            @media screen and (max-width:768px){
                flex-wrap: wrap;
                justify-content: flex-start;
            }

            .pagItem{
                width:30px;
                height:30px;
                border:1px solid #000;
                border-radius:4px;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:14px;
                margin-right:5px;
                cursor:pointer;

                @media screen and (max-width:768px){
                    margin-bottom:5px;
                }

                &:hover{
                    border:1px solid #999;
                    font-weight:700;
                }

                &.active{
                    background-color:#000;
                    border:1px solid #000;
                    color:#fff;
                    font-weight:700;
                }
            }
        }
    }
`;


