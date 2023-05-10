import React from 'react';
import partsImg from '../../../assets/images/about_us/parts.jpg'
import personImg from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero max-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={personImg} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={partsImg} className="w-1/2 absolute right-16 border-white top-1/2 border-[12px] rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <p className='text-3xl text-[#FF3811]'>About Us</p>
                    <h1 className="text-5xl font-bold lg:w-4/6">We are qualified & of experience in this field</h1>
                    <p className="text-[#737373] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn rounded-md bg-[#FF3811] border-none hover:border-none hover:bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;