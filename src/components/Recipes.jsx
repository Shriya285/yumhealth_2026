import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import projImg1 from '../assets/img/projImg1.jpg'
import projImg2 from '../assets/img/projImg2.jpg'
import projImg3 from '../assets/img/projImg3.jpg'
import projImg4 from '../assets/img/aboutImage5.jpg'
import projImg5 from '../assets/img/aboutImage6.jpg'
import projImg6 from '../assets/img/aboutImage7.jpg'
import choclate from '../assets/img/chocolate.jpg'; // Example image import
import brownie from '../assets/img/brownie1.jpg';
import { FaStar } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const Data=[
  {
    id:1,
    imgSrc:choclate,
    RecTitle:'Chocolate Cake',
    Rating:'4 '
  },
  {
    id:2,
    imgSrc:brownie,
    RecTitle:'Brownie',
    Rating:'4 '
  },
  {
    id:3,
    imgSrc:projImg3,
    RecTitle:'Recipe 3',
    Rating:'4 '
  },
  {
    id:4,
    imgSrc:projImg4,
    RecTitle:'Recipe 4',
    Rating:'4 '
  },
  {
    id:5,
    imgSrc:projImg5,
    RecTitle:'Recipe 5',
    Rating:'4 '
  },
  {
    id:6,
    imgSrc:projImg6,
    RecTitle:'Recipe 6',
    Rating:'4 '
  },
]

const Recipes = () => {
  return (
      <section className='home container section'>
          <div className='secTitle'>
            {/* <h3 className='title' >
              Trending
            </h3> */}
          </div>

          <div className='secContent grid'>
            {
              Data.map(({id,imgSrc,RecTitle,Rating})=>{
                  return(
                    <div key={id} className='singleRecipe'>
                        <div className='imageDiv'>
                          <img src={imgSrc} alt=""/>
                        </div>
                        <div className='cardInfo'>
                          <h4 className='recTitle'>
                            {RecTitle}
                          </h4>
                          <span className='continent flex'>
                            <FaStar style={{color:'#333333', marginBottom:'5px'}}/>
                            <span className="name" style={{color:'#333333',fontWeight:'bold'}}> { Rating }</span>
                          </span><br/>
                          {/* Linking to /recipe/:id where :id is the recipe ID */}
                          <Link to={`/recipe/${id}`}>
                          <button className="btn flex" style={{ marginTop: '1rem', justifyContent: 'space-between', gap: '.5rem' }}>
                              <span className='continent-flex'>
                                <FaArrowUpRightFromSquare />
                              </span>
                            </button>
                          </Link>
                        </div>
                    </div>
                  )
              })
            }
          </div>

      </section>
    )
}

export default Recipes;
