import React from "react";
import { FaAngleDoubleDown, FaRegStar } from "react-icons/fa";
import '../style/card.css'
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";

function Card(props) {



  return (
    <div>


      {/* <div className=''>
        <div className="px-2 d-flex items justify-content-center ">

          <div className="text-2xl mx-2 bord" >
            <FaArrowTrendUp className="mx-1" />
            <strong >Career Transitions</strong>
          </div>
          <div className="text-2xl mx-2 bord" >
            <FaRegStar className="mx-1" />
            <strong>Success Stories</strong>
          </div>

          <div className="text-2xl mx-2 bord" >
            <BsFillHandbagFill />
            <strong> Recruiter Testimonials</strong>
          </div>

        </div>
      </div> */}
      <section className="team-sec">
        <div className="px-2 d-flex items justify-content-center dark">
          <div className="text-2xl mx-2 hov" >
            <FaArrowTrendUp className="mx-1" />
            <strong >Career Transitions</strong>
          </div>
          <div className="text-2xl mx-2 hov" >
            <FaRegStar className="mx-1" />
            <strong>Success Stories</strong>
          </div>

          <div className="text-2xl mx-2 hov" >
            <BsFillHandbagFill />
            <strong> Recruiter Testimonials</strong>
          </div>

        </div>
        <div className="container team-container">
          <article className="team text-center">
            <span className=""><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computin<br />Voice President</p>
            <p className='card-text'><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />

            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>



            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />

            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>

            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4 '><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" className="mb-2 team-img" /></span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>
          </article>

          <article className="team text-center">
            <span className="mb-3"><img src="../image/blazers-2.webp" alt="" class="mb-2 team-img" />
            </span>
            <h5 className="bold mb-3">Harsh Bhatnagar</h5>
            <p className='card-text text-light mx-1'>Cloud Computing<br />Vice President</p>
            <p className='card-text mx-0 '><strong>Barclays Capital </strong></p>
            <  FaAngleDoubleDown style={{ color: "white" }} />
            <p className='mx-md-2 mx-4'><strong>Vice President-Engineering Manager</strong></p>


            <div className="team-social-links">
              <a href=""><i className="uil uil-instagram"></i></a>
              <a href="#"><i className="uil uil-twitter-alt"></i></a>
              <a href="#"><i className="uil uil-linkedin-alt"></i></a>
            </div>

          </article>

        </div>
      </section>



    </div>

  );
}

export default Card;
