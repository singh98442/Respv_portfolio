import React from 'react'
import './Work.scss'




const Work = () => {

    var items = [
        {
            title: "Hey, there, I am here",
            urls: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
        },
        {
            title: "Hey, there, I am from Nepal",
            urls: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg"
        },

        {
            title: "Hey, there, I am from America",
            urls: "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
        },

        {
            title: "Hey, there, I am from Bhutan",
            urls: "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg"
        }
    ]
    return (
        <div className='work' id='work'>
            <div className="wrapper">
                <div className="slider">
                    {items.map((item) => {
                        return (
                            <div className="item">
                                <h1>{item.title}</h1>
                                <img src={item.urls} alt="" />
                            </div>
                        )
                    })}
                </div>

            </div>


        </div>
    )
}

export default Work
