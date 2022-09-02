import './Links.css';
import {
    FaBars,
    FaFirstOrderAlt,
    FaBookReader,
    FaBell,
    FaThList, 
    FaCircleNotch,
    FaInbox,
    FaKaaba,
    FaDiceD20,
    FaAtlas,
    FaUserAlt,
    FaInfo,
    FaFacebook,
    FaLinkedin, 
    FaTwitter,
    FaInstagram
   } from 'react-icons/fa';


const Links = () => {
    return(
        <div className='links'>
            <div>
{/*    Start up logo      l */}
                <div className='logo'>
                  <div className='main_logo'>
                     <FaFirstOrderAlt className='icons'/>
                     <p>StartUp</p>
                  </div>
                  <div>
                    <FaBars />
                  </div>
                </div>

{/*    profile and icons */}
                <div className='profile'>
                    <div>
                        <FaBookReader />
                        <span>Profile</span>
                    </div>
                    <div>
                        <span>12</span>
                        <FaBell className='bell'/>    
                    </div>
                </div>

                {/* Discover */}

                <div className='profile discover'>
                    <div>
                        <FaThList />
                        <span>Discover</span>
                    </div>
                    <div className='discov'>
                        <span>24</span>    
                    </div>
                </div>
 {/* Startup  */}
                
                <div className='profiles'>
                    <div>
                        <FaCircleNotch />
                        <span>StartUp</span>
                    </div>
                    {/* <div>
                        <span></span>    
                    </div> */}
                </div>

                {/* community */}
                <div className='profiles'>
                    <div>
                        <FaInbox />
                        <span>Man community</span>
                    </div>
                    {/* <div>
                        <span></span>    
                    </div> */}
                </div>

                <div className='profiles'>
                    <div>
                        <FaKaaba />
                        <span>Fun community</span>
                    </div>
                    {/* <div>
                        <span></span>    
                    </div> */}
                </div>

                <div className='profiles'>
                    <div>
                        <FaDiceD20 />
                        <span>Tech community</span>
                    </div>
                    {/* <div>
                        <span></span>    
                    </div> */}
                </div>

                <div className='profiles'>
                    <div>
                        <FaAtlas />
                        <span>Lead community</span>
                    </div>
                    {/* <div>
                        <span></span>    
                    </div> */}
                </div>

                {/* Personal */}

                <div className='profiles'>
                    <div>
                        <FaUserAlt />
                        <span>Personal</span> 
                    </div>
                </div>  
                
                <div  className='under_personal'>
                    <span>In progress</span>
                    <span>180</span>  
                </div>

                <div  className='under_personal'>
                    <span>completed</span>
                    <span>48</span>  
                </div>

                <div  className='under_personal'>
                    <span>Read later</span>
                    <span>24</span>  
                </div>

            </div>

            <div className='nav_links'>

                <div className='logo_info'>
                  <div>
                    <FaInfo />
                  </div>
                  <div>
                     About StartUp
                  </div>
                </div>

                <div className='logo_links'>
                    <p>Send feedback</p>
                </div>
                <div className='logo_links'>
                    <p>Terms of use</p>
                </div>
                <div className='logo_links'>
                    <p>Privacy Policy</p>
                </div>

                <div className='socail_links'>
                    <span><FaLinkedin /></span>
                    <span><FaFacebook /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span> 
                    
                </div>

                <div className='rights'>
                    @ 2018 StartUp.io
                </div>
                
            </div>

        </div>
    )
}

export default Links;