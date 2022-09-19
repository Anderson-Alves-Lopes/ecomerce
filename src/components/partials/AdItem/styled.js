import styled from 'styled-components';

export const Item = styled.div`
     a{
        display:block;
        border:1px solid #fff;
        margin :10px;
        padding:10px;
        text-decoration:none;
        background-color:#fff;
        color:#000;
        transition: all ease .3s;
     
      &:hover{
        background-color:#eee;
        border:1px solid #ccc;
      }
     .itemImage img{
        background-color:#ff0000;
        width:100%;
        min-width:100%;
        border-radius:5px;
        min-height: 200px;
     }
     .itemName{
        font-weight:bold;
     }
    }
`;