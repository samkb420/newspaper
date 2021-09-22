import React from 'react'
import NewsItem from './NewsItem'

function Card() {
    const nums = () =>{
        const i =0;
        i =+ 1;
    }
    return (
        <div className="two card bg-white">

            <h3 className="">Most Read</h3>
            <  hr className="hr"/>
            {nums}
            <NewsItem/>
            <hr/>
            <NewsItem/>
            <hr/>
            <NewsItem/>
            <hr/>
            <NewsItem/>
            <hr/>
            <NewsItem/>
           
           
            
        </div>
    )
}

export default Card
