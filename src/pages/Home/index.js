import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {HomeArea, SearchArea} from './styled';
import { OlxApi } from "../../helpers/OlxApi";


import {TemplateContainer} from '../../components/Template';
import { AdItem } from '../../components/partials/AdItem';

export const Home = () =>{
    

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() =>{
        const getStates = async () =>{
            const slist = await OlxApi.getStates();
            setStateList(slist) 
             
        }
        
        getStates();
    }, []);

    useEffect(() =>{
        const getCatagories = async () =>{
            const cats = await OlxApi.getCatagories();
            setCategories(cats)
            
        }
        
        getCatagories();
    }, []);

    useEffect(() =>{
      const getRecentAds = async () =>{
        const json = await OlxApi.getAds({
            sort: 'desc',
            limit: 8
        });
        setAdList(json.ads);
      }
      getRecentAds();
    }, []);
    

   
    return(
        <>
        <SearchArea>
          <TemplateContainer>
              <div className="searchBox">
                 <form method="GET" action="/ads">
                    <input type="text" name="q" placeholder="O que você procura?" />
                    <select name="state" >
                    
                        {stateList.map((item, index)=>
                            <option key={index} value={item.name}>{item.name}</option>
                        )}
                    </select>
                    <button>Pesquisar</button>
                 </form>
              </div>
              
              <div className="categoryList">
                {categories.map((item, index)=>
                    <Link key={index} to={`/ads?cat=${item.slug}`} className="categoryItem">
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                    </Link>
                )}
              </div>
              
              
          </TemplateContainer>
       </SearchArea>
       <TemplateContainer>
        <HomeArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">
             {adList.map((item, index)=>
               <AdItem  key={index} data={item}/>
             )}
          </div>
           <Link to="/ads" className="seeAllLink">Ver todos</Link>
           <hr/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan nisi sit amet ullamcorper accumsan. Nunc sit amet odio feugiat, rhoncus ante eget, tempus lorem. Phasellus at est eu diam hendrerit aliquam vehicula id ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus sem odio, et fermentum purus porttitor a. In mollis tellus vel aliquam euismod. Fusce malesuada lorem elementum nunc pulvinar, ut sollicitudin erat maximus.
        </HomeArea>
       </TemplateContainer>
       </>
    );
}