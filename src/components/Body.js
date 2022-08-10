import React,{useState,useEffect} from "react"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaPeopleArrows, FaQuoteRight } from 'react-icons/fa';
import data from '../Data/bodyData'

const Body =()=>{
    const [picture,setPicture] = useState(data)
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        const lastIndex = picture.length-1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex (0)
        }
    },[picture,index])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1)
        },3000)
        return() => clearInterval(slider)

    },[index])

    return(
        <div className="row">
        <div className="col-3">
            <h1>Give Your Work A New Style!</h1>
            <p>Success isn't always about greatness. It's about consistency. Consistent  hard work gains success, Greatness will come</p>
        <a href=""  className="btn">Explorer Now &#8594;</a>
        <a href="" className="btn">Donate &#8594; </a>
        </div>
        <div className="col-2">
        <section className='section'>
        <div className='section-center'>
            {picture.map((pic,imageIndex) => {
                const {id,image} = pic
                let position = 'nextSlide';
                if(imageIndex===index){
                    position = 'activeSlide';
                }
                if(imageIndex ===index-1
                    || (index=== 0 && imageIndex === picture.length-1)){
                        position='lastSlides'

                }
                return <article className={position} key={id}>
                         <img src={image} className ='bodyImg-img' />

                    </article>
                   
            
            })}
                 <button className="prev" onClick={()=>setIndex(index-1)} ><FiChevronLeft /></button>
                 <button className="next" onClick={()=>setIndex(index+1)}><FiChevronRight /></button>
                 </div>
                 </section>
        </div>
    </div>
    )
}
export default Body