import React from 'react'
import Footer from "./Footer"
function Main(props) {

  console.log(props.name);

  return (
    <div>
      <main className='main-class'>
      <span className='key--class'>{props.id}</span>
      <figure>
        <img src={props.imageurl} alt="dp" className='img-class' />
      </figure>
      <h1 className='heading--class'>{props.name}</h1>
      <div className='about-class'>
      <h3 >About</h3>
      <p>{props.about}</p>
      <h3>Interest</h3>
      <p>{props.interest}</p>
      
      </div>
      <Footer />
      </main>
      <br />
    </div>

  )
}

export default Main