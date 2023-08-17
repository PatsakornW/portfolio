import React from 'react'
import logo from '../assets/logo.png'
import github from '../assets/github_footer.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'



function Footer() {
    return (
        <footer className="footer items-center flex justify-around flex-wrap p-2 bg-black text-primary-content">
            <div className='flex flex-col items-center md:items-start'>
                <div className='bg-white mask mask-circle'>
                    <img src={logo} alt="" className=' w-10 m-3' />
                </div>
                <p className="font-bold">
                    Portfolio Patsakorn
                </p>
                <p className='text-center'>Copyright © 2023 - All right reserved by Patsakorn</p>
            </div>

                <div className="flex  flex-col gap-2 ">
                    <div className="flex items-center">
                        <a href='https://github.com/PatsakornW' target='blank'><img src={github} alt="" className='w-[25px] me-2'/></a>
                        PatsakornW
                    </div>
                    <div className="flex items-center">
                        <a href='https://github.com/PatsakornW' target='blank'><img src={email} alt="" className='w-[25px] me-2'/></a>
                        patsakorn.wtnsb@gmail.com
                    </div>
                    <div className="flex items-center">
                        <a href='https://github.com/PatsakornW' target='blank'><img src={phone} alt="" className='w-[25px] me-2'/></a>
                        +66 81404 7291
                    </div>

                </div>

        </footer>

    )
}

export default Footer