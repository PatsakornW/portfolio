import React from 'react'
import me from '../assets/me.svg'
import logo_html from '../assets/001-html.png'
import logo_js from '../assets/002-java-script.png'
import logo_css from '../assets/006-css-3.png'
import logo_react from '../assets/004-atom.png'
import logo_dart from '../assets/dart.png'
import logo_figma from '../assets/003-figma.png'
import logo_android from '../assets/android.png'
import logo_canva from '../assets/canva.png'
import logo_bs from '../assets/bs.png'
import logo_tailwind from '../assets/tailwind.png'
import logo_flutter from '../assets/flutter.png'
import logo_vs from '../assets/vs.png'













function Home() {
    return (
        <div className='flex flex-wrap'>
            <div className=' grid grid-cols-2 mt-20'>
                <div className='col-span-2 lg:col-span-1  flex flex-col justify-center items-end text-5xl font-bold'>
                    <div>
                        <p>Hello there,</p>
                        <p >I'm Patsakorn.</p>
                        <p className='text-7xl'>Front-Developer !</p>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1 flex justify-center'>
                    <img src={me} className='w-2/6' alt="me" />
                </div>
            </div>

            <div className="flex flex-wrap  mx-auto w-full justify-center items-center h-screen">
                {/* <div className='border-2 border-black w-1/2 p-5 justify-between flex flex-wrap my-10'>
                    <div className='flex-col items-center flex '>
                        <p className=' font-bold'>Skill</p>
                        <p>HTML</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>DART</p>

                    </div>
                    <div className='flex-col items-center flex'>
                        <p className=' font-bold'>Framework / Libraries</p>
                        <p>React</p>
                        <p>Flutter</p>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                    </div>
                    <div className='flex-col items-center flex'>
                        <p className=' font-bold'>Tool</p>
                        <p>Visual Studio Code</p>
                        <p>Android Studio</p>
                        <p>Figma</p>
                        <p>Canva</p>
                    </div>

                </div> */}
                <div className="card card-compact w-64 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Skill</h2>
                        <button className="btn w-full btn-outline ">
                            <div className='flex items-center w-full'>
                                <img src={logo_html} className='w-6 h-6' alt="html" />
                                <p >HTML</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center w-full'>
                                <img src={logo_css} className='w-6 h-6' alt="css" />
                                <p >CSS</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full '>
                                <img src={logo_js} className='w-6 h-6' alt="js" />
                                <p>JavaScript</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_dart} className='w-6 h-6' alt="dart" />
                                <p>Dart</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="card card-compact w-64 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">FrameWork / Libralies</h2>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_react} className='w-6 h-6' alt="react" />
                                <p>React</p>
                            </div>
                        </button><button className="btn w-full btn-outline">
                            <div className='flex items-center w-full'>
                                <img src={logo_flutter} className='w-6 h-6 ' alt="dart" />
                                <p>Flutter</p>
                            </div>
                        </button><button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_bs} className='w-6 h-6 ' alt="dart" />
                                <p>Bootstrap</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_tailwind} className='w-6 h-6 ' alt="dart" />
                                <p>Tailwind</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="card card-compact w-64 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tool</h2>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_vs} className='w-6 h-6 ' alt="dart" />
                                <p>Visual Studio Code</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_android} className='w-6 h-6 ' alt="dart" />
                                <p>Android Studio</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_figma} className='w-6 h-6 ' alt="dart" />
                                <p>Figma</p>
                            </div>
                        </button>
                        <button className="btn w-full btn-outline">
                            <div className='flex items-center  w-full'>
                                <img src={logo_canva} className='w-6 h-6 ' alt="dart" />
                                <p>Canva</p>
                            </div>
                        </button>
                        

                    </div>
                </div>


            </div>

        </div>

    )
}

export default Home