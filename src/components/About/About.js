import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="transition-to-about"></div>
            <h1 className="about-heading">About Me</h1>
            <div className="about-profile">
                <div className="profile-container">
                    <img src="https://scontent.fatl1-1.fna.fbcdn.net/v/t1.6435-9/67562002_10157581931711979_9202964409553518592_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1zoZCDgTMR4AX_BwoeE&_nc_ht=scontent.fatl1-1.fna&oh=0b3056fe5d173fb1e7950a9ba2aab930&oe=609D5D66" alt="profile-picture"/>
                    <div className="about-links">
                        <a href="https://www.linkedin.com/in/danielyhan/" target="_blank">
                            <FiLinkedin />
                        </a>
                        <a href="https://www.github.com/hysstory" target="_blank">
                            <FiGithub />
                        </a>
                        <a href="https://www.instagram.com/hanieldan_/" target="_blank">
                            <FiInstagram />
                        </a>
                        <a href="https://www.facebook.com/dyh92" target="_blank">
                            <FiFacebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <p>
                    Hello! <br/> I am Daniel Han, <br/>
                    a software engineer based out of Atlanta, <br/>
                    looking to grow in knowledge and character <br/>
                    through challenging and meaningful work<br/>
                    <div className="space"></div>
                    in the meanwhile, I am learning new things, <br/>
                    coming up with ideas, <br/> and making applications<br/>
                    to help the people around me <br/>
                    in little aspects of their life <br/>
                    <div className="space"></div>
                    as such, I hope to make the world a better place <br/>
                    one line of code at a time

                </p>
            </div>
        </div>
    )
}

export default About
