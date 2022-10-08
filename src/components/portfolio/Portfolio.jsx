import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './Portfolio.scss'
import { featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio } from '../../data'

const Portfolio = () => {

  const [selected, setSelected] = useState("featured")
  const [data, setData]= useState([])

  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        
        break;
      case "web":
        setData(webPortfolio)
        
        break;
      case "mobile":
        setData(mobilePortfolio)
        
        break;
      case "design":
        setData(designPortfolio)
        
        break;
      case "content":
        setData(contentPortfolio)
        
        break;
    
      default:
        setData(featuredPortfolio)
        break;
    }

  },[selected])

  const list = [
    {
      id : "featured",
      title : "Featured"
    },
    {
      id : "web",
      title : "Web App"
    },
    {
      id : "mobile",
      title : "Mobile App"
    },
    {
      id : "design",
      title : "Design"
    },
    {
      id : "content",
      title : "Contact"
    }
  ]
  return (
    <div className='portfolio' id='portfolio'>
        <div className="wrapper">
          <h1>Portfolio</h1>
          <ul> 
            {list.map((L)=>{
              return(
                <PortfolioList listItem={L.title} active = {selected === L.id}
                setSelected={setSelected} id = {L.id}/>
                
              )
            })}
          </ul>
          <div className="container">
              {data.map((d)=>{
                return(
            <div className="item">
              <img src={d.img} alt="" />
              <h2>{d.title}</h2>
              
            </div>


                )
              })}

          </div>
        </div>
      
    </div>
  )
}

export default Portfolio
