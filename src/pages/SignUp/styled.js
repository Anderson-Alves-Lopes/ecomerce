import styled from 'styled-components';


export const SignInArea = styled.div`

  form{
    background-color:#fff;
    border-radius:3px;
    padding:10px;
    box-shadow: 0 0 3px #999;

    .area{
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area--title{
           width:200px;
           text-align:right;
           padding-right:20px;
           font-weight:bold;
           font-size:14px;
        }
        .area--input{
           flex:1;
           display:flex;
         
           
           input{
            width:100%;
            font-size:14px;
            padding:5px;
            border:1px solid #ddd;
            border-radius:3px;
            outline:0;
           }
            input[type="checkbox"]{
                 margin-right:100%;
           }
           button{
            background-color:#0089ff;
            border:0;
            outline:none;
            padding:5px 10px;
            border-radius:4px;
            color:#fff;
            font-size:15px;
            cursor:pointer;
            transition: all ease .4s;

            &:hover{
                opacity:.7;
            }
           }
        }
    }
  }
`;