import React from 'react';
import ContactUs from '../ContactUs/ContactUs.tsx';
import Footer from '../Footer/Footer.tsx';
import CardDetail from '../CardDetail/CardDetail';
import Navbar from '../Navbar/Navbar';
import img1 from "../../img/acabado piso.jpg"
import img2 from "../../img/acabados 2.jpg"
import img3 from "../../img/acabados.jpg"
import img4 from "../../img/acabados 4.webp"
import img5 from "../../img/Localidad Puente Aranda.avif"
import img6 from "../../img/materiales-construccion.jpg"
import img7 from "../../img/obra 2.jpg"
import img8 from "../../img/obra 3.jpg"
import img9 from "../../img/obra.webp"
import "./home.css"


function Home() {
  return (
    <div>
      <Navbar></Navbar>  
<div className='box'>

    <section>
    <div className="container">
        <div className="carousel">
            <input type="radio" name="slides" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            <input type="radio" name="slides" id="slide-3"/>
            <input type="radio" name="slides" id="slide-4"/>
            <input type="radio" name="slides" id="slide-5"/>
            <input type="radio" name="slides" id="slide-6"/>
            <ul className="carousel__slides">
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img5} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Tim Marshall</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img4} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Christian Joudrey</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img6} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Steve Carter</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img7} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img8} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Rosan Harmens</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img9} alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Annie Spratt</span>                            
                        </figcaption>
                    </figure>
                </li>
            </ul>    
            <ul className="carousel__thumbnails">
                <li>
                    <label htmlFor="slide-1"><img src={img5} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-2"><img src={img4} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-3"><img src={img6} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-4"><img src={img7} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-5"><img src={img8} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-6"><img src={img9} alt=""/></label>
                </li>
            </ul>
        </div>
    </div>
</section>
</div>
{/* ------------------------------------------------------------------------------------------------------------------->>>> */}
<div className="content-wrapper">
  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing First Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Second Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Fifth Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

</div>
{/* ----------------------------------------------------------------------------------------------------------------------> */}

<div className='position' >
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carousel2">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carousel2">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
</div>
<Footer/>
<ContactUs/>
</div>

  );
}

export default Home;
