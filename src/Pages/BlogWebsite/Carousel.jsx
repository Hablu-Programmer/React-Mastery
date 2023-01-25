import React from 'react'
import "./BlogCSS/Blog.css"
function Carousel() {
  return (
    <div className=''>
        <div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5">
            <div class="carousel-inner">
                <div class="carousel-item active">
                 <div className='row'>
                    <div className='col-md-6'>
                        <img src="/img/live.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className='col-md-6 CarouselText'>
                        <p className='Short'>Lorem, ipsum dolor</p>
                        <h1 className='title'>Live With Anisul Islam</h1>
                        <p className='Short'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime ex libero quod distinctio sequi in tempore! Tempore vero molestias amet accusamus cum facilis nulla voluptate suscipit ullam a quisquam tenetur similique cupiditate iusto, assumenda ut fugit repellat dolorem esse itaque. Eligendi totam deserunt maiores quidem cupiditate saepe dolorum voluptatibus!</p>
                        <p className='Short1'>Hablu Programmer</p>
                        <p className='Short'>20 Jan 2023</p>
                    </div>
                 </div>
                </div>
                <div class="carousel-item ">
                 <div className='row'>
                    <div className='col-md-6'>
                        <img src="/img/maxresdefault (1).jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className='col-md-6 CarouselText'>
                        <p className='Short'>Lorem, ipsum dolor</p>
                        <h1 className='title'>Learn javaScript With Projects Bangla Tutorial</h1>
                        <p className='Short'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime ex libero quod distinctio sequi in tempore! Tempore vero molestias amet accusamus cum facilis nulla voluptate suscipit ullam a quisquam tenetur similique cupiditate iusto, assumenda ut fugit repellat dolorem esse itaque. Eligendi totam deserunt maiores quidem cupiditate saepe dolorum voluptatibus!</p>
                        <p className='Short1'>Hablu Programmer</p>
                        <p className='Short'>20 Jan 2023</p>
                    </div>
                 </div>
                </div>
                <div class="carousel-item">
                 <div className='row'>
                    <div className='col-md-6'>
                        <img src="/img/maxresdefault (2).jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div className='col-md-6 CarouselText'>
                        <p className='Short'>Lorem, ipsum dolor</p>
                        <h1 className='title'>Hablu programmer 27 courses free , Enroll Now</h1>
                        <p className='Short'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime ex libero quod distinctio sequi in tempore! Tempore vero molestias amet accusamus cum facilis nulla voluptate suscipit ullam a quisquam tenetur similique cupiditate iusto, assumenda ut fugit repellat dolorem esse itaque. Eligendi totam deserunt maiores quidem cupiditate saepe dolorum voluptatibus!</p>
                        <p className='Short1'>Hablu Programmer</p>
                        <p className='Short'>20 Jan 2023</p>
                    </div>
                 </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" ></span>
            
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
  )
}

export default Carousel