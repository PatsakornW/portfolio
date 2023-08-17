import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
    const scrollToSection = (sectionName) => {
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

       
    };

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to={'/'}>
                        <div className="flex items-center px-0 md:px-2 mx-0 md:mx-2 font-semibold text-3xl ">
                            <img src={logo} alt="" className='w-6 h-7' />
                            <p className='ms-4 hidden md:block'>Portfolio</p>
                        </div>
                    </Link>

                    <div className='flex-1  justify-end hidden md:block mx-20'>
                        <div className="flex  justify-end items-center">
                            <div className='btn btn-ghost' onClick={() => scrollToSection('about-section')}> About</div>
                            <div className='btn btn-ghost' onClick={() => scrollToSection('project-section')}>  Project</div>
                            <div className='btn btn-ghost'  onClick={() => scrollToSection('experience-section')}>  Experience</div>
                        </div>
                    </div>
                    <div className="flex-grow md:flex-none justify-end ">
                        {/* <Theme /> */}
                    </div>
                </div>
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    <li className='mt-4 mb-2'onClick={() => scrollToSection('about-section')}>About</li>
                    <li className='mt-4 mb-2'onClick={() => scrollToSection('project-section')}>Project</li>
                    <li className='mt-4 mb-2'onClick={() => scrollToSection('experience-section')}>Contact</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar