import styled from 'styled-components';

export const Template = styled.div`
    width:100%;
`;

export const PageContainer = styled.div`
    max-width:1440px;
    margin:0 auto;
    height:100%;
    background: #e5e5e521;
    margin-top:20px;

    .searchBox{
        max-width:1440px;
        margin:0 20px;
        display: flex;
        align-items: center;
        height:100%;        
        
        & select{
            width: 200px;
            border: none;
            border-bottom: 1px solid #7A7A7A;
            height:30px;
            outline:0;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
        & input{
            width: 400px;
            border: none;
            border-bottom: 1px solid #7A7A7A;
            height:30px;
            outline:0;
            padding-left:30px;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
        & button{
            border:none;
            border-bottom: 1px solid #7A7A7A;
            background-color:#fff;
            height:30px;
            outline:0;
            cursor:pointer;
            &:focus{
                outline:0;
            }
        }
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

