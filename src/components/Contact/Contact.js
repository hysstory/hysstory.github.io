import { useState } from 'react'
import { database } from './firebase'

import { GoLocation } from 'react-icons/go'
import { SiMailDotRu } from 'react-icons/si'
import { FiSmartphone } from 'react-icons/fi'

import './Contact.css'


const Contact = () => {
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        database.collection('contact').add({
            firstName:firstName,
            lastName:lastName,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
            time: new Date().toLocaleString() })
            .then(() => {
                alert( 'Thanks! I will get back to you soon!' )
            })
            .catch((error) => {
                alert(error.message)
            })
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhoneNumber("")
            setMessage("")
    }

    return (
        <div className="contact">
            <div className="contact-transition"></div>
            <h1 className="contact-heading">Contact Me</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Basic Info</h2>
                    <ul>
                        <li><GoLocation />
                            Metro Atlanta Area</li>
                    </ul>
                    <ul>
                        <li><SiMailDotRu />
                            dyhan92@gmail.com</li>
                    </ul>
                    <ul>
                        <li><FiSmartphone />
                            404.993.7134</li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h2 className="form-heading">say hello</h2>
                    <form className="contact-form-box" onSubmit={ handleSubmit }>
                        <div className="input-box w50">
                            <input type="text" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} required/>
                            <span>First Name</span>
                        </div>
                        <div className="input-box w50">
                            <input type="text" value={lastName}
                            onChange={(e) => setLastName(e.target.value)} required/>
                            <span>Last Name</span>
                        </div>
                        <div className="input-box w50">
                            <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                            <span>Email Address</span>
                        </div>
                        <div className="input-box w50">
                            <input type="tel" value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} required/>
                            <span>Phone Number</span>
                        </div>
                        <div className="input-box w100">
                            <textarea name="" value={message}
                            onChange={(e) => setMessage(e.target.value)} required>
                            </textarea>
                            <span className="textbox-text">Write your message</span>
                        </div>
                            <button className="btn" type="submit" value="Send">
                                <h2>send message</h2>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
