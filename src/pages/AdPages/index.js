import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'; 
import {SignInArea, Fake} from './styled';
import {OlxApi} from '../../helpers/OlxApi'; 


import {TemplateContainer} from '../../components/Template';

export const AdPages = () =>{
    
    
    const { id } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(()=>{
        const getAdInfo = async (id) =>{
            const json = await OlxApi.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, [id]);
    const formatDate = (d) =>{
        let cDate = new Date();

        let months = ['janeiro','fevereiro','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }
    return(

       <TemplateContainer>
        <SignInArea>
           <div className="leftSide">
              <div className="box">
                <div className="adImage">
                   {loading && <Fake height={300}/>}
                </div>
                <div className="adInfo">
                    <div className="adName">
                    {loading && <Fake height={20} />}
                    {adInfo.title &&
                      <h2>{adInfo.title}</h2>
                    }
                    {adInfo.dateCreated &&
                       <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                    }
                    </div>
                    <div className="adDescription">
                    {loading && <Fake height={100} />}
                    {adInfo.description}
                    <hr/>
                    {adInfo.views &&
                      <small>Visualizações: {adInfo.views}</small>
                    }
                    </div>
                </div>
              </div>
           </div>
           <div className="rightSide">
                <div className="box box--padding">
                  {loading && <Fake height={20} />}
                </div>
                <div className="box box--padding">
                    {loading && <Fake height={50} />}
                </div>
           </div>
        </SignInArea>
       </TemplateContainer>
    );
}