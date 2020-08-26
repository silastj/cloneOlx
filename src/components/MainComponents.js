import styled from 'styled-components';

export const Template = styled.div`
    width:100%;
`;

export const PageContainer = styled.div`
    max-width:1440px;
    margin:0 auto 30px auto;
    margin-top:10px;

    .searchBox{
        max-width:800px;
        margin:0 16px;
        display: flex;
        align-items: center;
        background: #394a27;
        padding: 20px 8px;
        border-radius:4px;
        
         select{
            min-width:222px;
            max-width: 400px;
            border: none;
            border-bottom: 1px solid #7A7A7A;
            height:30px;
            outline:0;
            color:#000000;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
         input{
            min-width:468px;
            max-width: 400px;
            border: none;
            border-bottom: 1px solid #7A7A7A;
            height:30px;
            outline:0;
            padding-left:30px;
            color:red;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
         button{
            border:none;
            border-bottom: 1px solid #7A7A7A;
            background-color:#fff;
            height:30px;
            outline:0;
            border-left: 1px solid #7a7a7a7a;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
    }
    .categoryList{
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;


        .categoryItem{
            width:20%;
            margin:auto 2.5%;
            display: flex;
            align-items: center;
            flex-direction: column;
            transition: .3s ease;
            color:#000;

            &:hover{
                color:#999;
                transition: .3s ease;
            }
            
            img{
                width:45px;
            }
            span{
                padding:10px 0;
            }
        }
    }
    @media screen and (max-width:768px){
        .searchBox{
            background:#394a2730;
           
        }
        .searchBox select{
            width:100%;
            border-bottom:none;
            margin-bottom:10px;
            
        }
        .searchBox input{
            min-width:178px;
            width:100%;
            padding-left:2px;
            border-bottom:none;
            width:100%;

            ::-webkit-input-placeholder {
            color: #000000;
            }

            :-moz-placeholder { /* Firefox 18- */
            color: #000000;  
            }

            ::-moz-placeholder {  /* Firefox 19+ */
            color: #000000;  
            }

            :-ms-input-placeholder {  
            color: #000000;  
            }


        }

        .searchBox button{
            /* position:absolute; */
            right:26px;
            border-bottom:none;
        }
    }
    @media screen and (max-width:425px){
        .searchBox button{
            position:absolute;
            right:26px;
    }
   
`;

export const PageTitle = styled.h1`
    font-size:27px;
    color:#394A26;
    padding:0 10px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    background-color:#ffcaca;
    margin:10px;
    padding:10px;
    color:#fff;
    border:2px solid #ff0000;
`;

