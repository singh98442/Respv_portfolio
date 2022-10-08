import React from 'react'
import './PortfolioList.scss'

const PortfolioList = ({id, active, setSelected,listItem}) => {
  return (
    <div className=''>
      <li className={active?'portfolioList active':'portfolioList'} onClick={()=>setSelected(id)}>{listItem}</li>
      {/* <li>web app</li>
      <li>mobile app</li>
      <li>design</li>
      <li>content</li> */}

    </div>
  )
}

export default PortfolioList
