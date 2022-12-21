import React from 'react';

const Home = () =>{
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 m-0 p-0'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="img/taj1.png.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="img/agra fort.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="img/agra.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home