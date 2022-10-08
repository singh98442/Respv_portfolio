import React from 'react'
import './Testimonial.scss'

const Testimonial = () => {

  const testimonialData = [
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_960_720.jpg",
      name: "John",
      post: "Developer"
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg",
      name: "Bella",
      post: "Site Engineer",
      featured : true
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      name: "Aadam",
      post: "Mobile Developer"
    },
  ]
  return (
    <div className='testimonial' id='testimonial'>
      <div className="testimonialWrapper">
        <h1>Testimonials</h1>
        {testimonialData.map((item, index) => {
          return (
            <div className={item.featured? "card active":"card"} key={index}>
              <div className="top">
                <img src="assets/right-arrow.png" className='arrow' alt="" />
                <img src={item.img} className='baby' alt="" />
                <img src="assets/youtube.png" className='youtube' alt="" />
              </div>
              <div className="center">
                <p>Lorem ipsum dolor soluta  eum quos magni ipsa molestiae voluptatum perspiciatis est quidem laborum nulla?</p>
              </div>
              <div className="bottom">
                <h2 className='name'>{item.name}</h2>
                <h2 className='post'>{item.post}</h2>
              </div>
            </div>


          )
        })}
      </div>

    </div>
  )
}

export default Testimonial
