import React from 'react'
import './Intro.scss'
import Typed from 'react-typed';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="introWrapper">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Hi, There I'M</h2>
          <h1>MERN DEVELOPER</h1>
          <h3>from Nepal</h3>
          <Typed className='type'
                strings={[
                    "work as a web developer",
                    "work as a service tech engineer",
                    "work as a service manager"]}
                    typeSpeed={40}
                    backSpeed={50}
                    // attr="placeholder"
                    loop >
                    {/* <input type="text"/> */}
                </Typed>
          <a href="#portfolio"><img src="assets/down.png" alt="" /></a>
        </div>
      </div>

    </div>
  )
}

export default Intro
