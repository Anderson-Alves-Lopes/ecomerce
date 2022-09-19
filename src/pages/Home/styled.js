import styled from 'styled-components';

export const SearchArea = styled.div`
  background-color:#ddd;
  border-bottom: 1px solid #ccc;
  padding:20px 0;

  .searchBox{
    background-color:#9bb83c;
    padding:20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
    display:flex;

    form{
       flex:1;
       display:flex;
       gap:20px;


       input, select{
        height:40px;
        border:0;
        border-radius:5px;
        outline:0;
        font-size:15px;
        color:#000;
       }

       input{
        flex:1;
        padding: 0 10px;
       }
       select{
        width:100px;
       }
       button{
        background-color:#49aeef;
        font-size:15px;
        border-radius:5px;
        border:0;
        padding:0 10px;
        color:#fff;
        height:40px;
        cursor:pointer;
       }
    }
  }
 
    
    .categoryList{
      display:flex;
      flex-wrap:wrap;
      padding:10px 0;
      margin-top:20px;
    
   
    .categoryItem{
      width:25%;
      height:60px;
      display:flex;
      align-items:center;
      gap:15px;
      text-decoration:none;;
      color:#000;
      margin-bottom:15px;
      transition:all ease .4s;
      &:hover{
        color:#999;
        img{
          opacity:.7;
        }
      }
      
      img{
        width:50px;
        height:50px;
        transition:all ease .4s;
      }
    
    }
  }
  
`;
export const HomeArea = styled.div`
  h2{
    font-size:20px;
  }
  .list{
    display:flex;
    flex-wrap:wrap;

    .adItem{
      width:25%;
    }
  }
  .seeAllLink{
    color:#000;
    text-decoration:none;
    font-weight:bold;
    display: inline-block;
    margin-top:10px;
  }
  
`;