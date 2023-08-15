import React from 'react'
import me from '../assets/me.svg'



function Home() {
    // const style = {
    //     color: 'white',
    //     WebkitTextStroke: '1px black',
    // }
    return (
        <div className='flex flex-wrap'>
            <div className=' grid grid-cols-2 mt-20'>
                <div className='col-span-2 lg:col-span-1  flex flex-col justify-center items-center  xl:items-end text-3xl xl:text-5xl font-bold mx-10 '>
                    <div className='text-center xl:text-start'>
                        <p >Hello there,</p>
                        <p >I'm Patsakorn.</p>
                        <p className='xl:text-6xl text-5xl' >Front-End Developer ! </p>
                    </div>


                </div>
                <div className='col-span-2 lg:col-span-1 flex justify-center my-10 md:my-0'>
                    <img src={me} className='w-1/2 md:w-2/6' alt="me" />
                </div>
            </div>

            <div className='flex  flex-col  w-full xl:w-1/2 mx-10 lg:mx-40 xl:mx-auto my-10 h-min xl:h-screen justify-center'>
                <p className='text-4xl font-medium'>Skill</p>
                <div className='divider '></div>
                <div className="flex flex-wrap md:flex-nowrap  mx-auto w-full justify-center items-center ">
                    <div className="card card-compact w-56 ">
                        <div className="card-body items-center text-center gap-4">
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                    </svg>
                                    <p className=''>HTML</p>

                                </div>

                            </button>


                            <button className="btn w-full btn-outline">
                                <div className='flex items-center w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                    </svg>

                                    <p >CSS</p>
                                </div>
                            </button>

                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full '>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                    </svg>

                                    <p>JavaScript</p>
                                </div>
                            </button>
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"></path><path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path><path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"></path><polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
                                    </svg>

                                    <p>Dart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="card card-compact w-56 ">
                        <div className="card-body items-center text-center gap-4">

                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 40 40">
                                        <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                                    </svg>
                                    <p>React</p>
                                </div>
                            </button><button className="btn w-full btn-outline">
                                <div className='flex items-center w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <linearGradient id="gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1" x1="34.31" x2="21.223" y1="47.31" y2="34.223" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0176d0"></stop><stop offset=".454" stop-color="#0275ce"></stop><stop offset=".617" stop-color="#0472c7"></stop><stop offset=".733" stop-color="#076bbc"></stop><stop offset=".827" stop-color="#0d63ab"></stop><stop offset=".907" stop-color="#135895"></stop><stop offset=".933" stop-color="#16538c"></stop></linearGradient><polygon fill="url(#gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1)" points="37,44 25,44 14,33 20,27"></polygon><polygon fill="#50e6ff" points="5,24 25,4 37,4 11,30"></polygon><polygon fill="#50e6ff" points="37,22 20,39 14,33 25,22"></polygon><rect width="8.485" height="8.485" x="15.757" y="28.757" fill="#35c1f1" transform="rotate(-45.001 20 33)"></rect>
                                    </svg>

                                    <p>Flutter</p>
                                </div>
                            </button><button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path>
                                    </svg>

                                    <p>Bootstrap</p>
                                </div>
                            </button>
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                                    </svg>

                                    <p>Tailwind</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="card card-compact w-56">
                        <div className="card-body items-center text-center gap-4">

                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                                    </svg>

                                    <p className=''>Visual Studio Code</p>
                                </div>
                            </button>
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#00c853" d="M4,23C4,11.954,12.954,3,24,3s20,8.954,20,20l-20,2L4,23z"></path><path fill="#00e676" d="M44,23c0,11.046-8.954,20-20,20S4,34.046,4,23H44z"></path><path fill="#c2eafd" d="M39.29,42.34v3.16c0,0.19-0.1,0.35-0.25,0.43c-0.14,0.09-0.33,0.1-0.5,0l-2.72-1.59l-4.68-8.15	l-2-3.47l-3.75-6.52l2.93-2.93l3.99,6.94l2.07,3.6L39.29,42.34z"></path><path fill="#9addfb" d="M31.231,28.335c-0.814,1.101-1.869,2.011-3.092,2.648l3.991,6.941	c1.185-0.648,2.272-1.446,3.265-2.346L31.231,28.335z"></path><path fill="#c2eafd" d="M39,23c0,4.24-1.77,8.08-4.62,10.81c-0.96,0.93-2.05,1.73-3.24,2.38C29.02,37.34,26.59,38,24,38	c-2.53,0-4.96-0.62-7.14-1.81l-4.68,8.15l-2.72,1.59c-0.17,0.1-0.36,0.09-0.5,0c-0.15-0.08-0.25-0.24-0.25-0.43v-3.16l10.97-19.07	l2.93,2.93l-3.75,6.53C20.43,33.56,22.18,34,24,34c1.86,0,3.61-0.46,5.14-1.28c1.21-0.63,2.28-1.49,3.17-2.51	C33.99,28.27,35,25.76,35,23H39z"></path><path fill="#37474f" d="M28.5,13H26v-3h-4v3h-2.5c-0.828,0-1.5,0.672-1.5,1.5V23l4.932,4.932c0.59,0.59,1.546,0.59,2.135,0	L30,23v-8.5C30,13.672,29.328,13,28.5,13z M24,22c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5	C26.5,20.881,25.381,22,24,22z"></path>
                                    </svg>

                                    <p>Android Studio</p>
                                </div>
                            </button>
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                                    </svg>

                                    <p>Figma</p>
                                </div>
                            </button>
                            <button className="btn w-full btn-outline">
                                <div className='flex items-center  w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                                    </svg>
                                    <p>Git</p>
                                </div>
                            </button>


                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Home