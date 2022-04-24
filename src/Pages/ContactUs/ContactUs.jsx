import React from 'react';
import './ContactUs.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <div className='container'>
                <div className="contactUs__wrapper">
                    <div className='constact_left'>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1650774842119!5m2!1sen!2sbd" 
                    width="600"
                    height="450" 
                    style={{border:0}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='constact_right'>
                        <div className='contact__heading'>
                            <SectionHeading
                                headingLeft="Our"
                                headingRight=" Location "
                                subheading="Here is our location to get us firstly."
                            />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs