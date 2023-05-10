import React from 'react';
import bannerImg1 from '../../../assets/images/banner/1.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/5.jpg'
import bannerImg5 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full h-5/6"  style={{height: '82vh'}}>
                <img src={bannerImg1} className="w-full rounded-md" />
                <div className='rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full inset-0 absolute opacity-50'></div>
                <div className="absolute flex justify-start -translate-y-1/2 left-10 top-1/2 right-0">
                    <div className='w-2/6'>
                        <p className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</p>
                        <p className='text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn bg-[#FF3811] border-none border-white rounded-md hover:bg-[#FF3811] hover:border-none text-white mr-5'>Discover More</button>
                            <button className='btn bg-transparent border-2 border-white rounded-md hover:bg-transparent hover:border-2 hover:border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5">
                    <a href="#slide5" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❮</a>
                    <a href="#slide2" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-5/6" style={{height: '82vh'}}>
                <img src={bannerImg2} className="w-full rounded-md" />
                <div className='rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full inset-0 absolute opacity-50'></div>
                <div className="absolute flex justify-start -translate-y-1/2 left-10 top-1/2 right-0">
                    <div className='w-2/6'>
                        <p className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</p>
                        <p className='text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn bg-[#FF3811] border-none border-white rounded-md hover:bg-[#FF3811] hover:border-none text-white mr-5'>Discover More</button>
                            <button className='btn bg-transparent border-2 border-white rounded-md hover:bg-transparent hover:border-2 hover:border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5">
                    <a href="#slide1" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❮</a>
                    <a href="#slide3"className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-5/6" style={{height: '82vh'}}>
                <img src={bannerImg3} className="w-full rounded-md" />
                <div className='rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full inset-0 absolute opacity-50'></div>
                <div className="absolute flex justify-start -translate-y-1/2 left-10 top-1/2 right-0">
                    <div className='w-2/6'>
                        <p className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</p>
                        <p className='text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn bg-[#FF3811] border-none border-white rounded-md hover:bg-[#FF3811] hover:border-none text-white mr-5'>Discover More</button>
                            <button className='btn bg-transparent border-2 border-white rounded-md hover:bg-transparent hover:border-2 hover:border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5">
                    <a href="#slide2" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❮</a>
                    <a href="#slide4" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-5/6" style={{height: '82vh'}}>
                <img src={bannerImg4} className="w-full rounded-md" />
                <div className='rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full inset-0 absolute opacity-50'></div>
                <div className="absolute flex justify-start -translate-y-1/2 left-10 top-1/2 right-0">
                    <div className='w-2/6'>
                        <p className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</p>
                        <p className='text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn bg-[#FF3811] border-none border-white rounded-md hover:bg-[#FF3811] hover:border-none text-white mr-5'>Discover More</button>
                            <button className='btn bg-transparent border-2 border-white rounded-md hover:bg-transparent hover:border-2 hover:border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5">
                    <a href="#slide3" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❮</a>
                    <a href="#slide5" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full" style={{height: '82vh'}}>
                <img src={bannerImg5} className="w-full rounded-md" /> 
                <div className='rounded-md bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full inset-0 absolute opacity-50'></div>
                <div className="absolute flex justify-start -translate-y-1/2 left-10 top-1/2 right-0">
                    <div className='w-2/6'>
                        <p className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</p>
                        <p className='text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn bg-[#FF3811] border-none border-white rounded-md hover:bg-[#FF3811] hover:border-none text-white mr-5'>Discover More</button>
                            <button className='btn bg-transparent border-2 border-white rounded-md hover:bg-transparent hover:border-2 hover:border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0 right-5">
                    <a href="#slide5" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❮</a>
                    <a href="#slide1" className="btn btn-active btn-ghost hover:bg-red-600 text-white btn-circle mx-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;