import React, { useState } from 'react'
import './../../Assats/css/FormCss/UserInformation.css';
import {FaUser, FaServicestack, FaRegAddressBook} from 'react-icons/fa';
import {BiTime} from 'react-icons/bi';
import {AiOutlinePoundCircle, AiOutlineDollarCircle} from 'react-icons/ai';
import {BsCalendar2Date} from 'react-icons/bs';
import {RiUser2Fill} from 'react-icons/ri';
import { MdEmail , MdPhoneLocked, MdCall } from 'react-icons/md';

const UserInformationForm = () => {
  const [name, setName]       = useState(null);
  const [email, setEmail]     = useState(null);
  const [phone, setPhone]     = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <div className='UserInformationContainer'>
      <h3>Personal Information</h3>

      <div className='UserInfoWrap'>

            <div className='userInformationInput'>

                <div className='FormInputWrapingUser'>
                    <RiUser2Fill />
                      <input type="text" 
                      name="client_name" 
                      onChange={(e)=> setName(e.target.value)} 
                      placeholder="Your Name"
                      />
                </div>

                <div className='FormInputWrapingUser'>
                    <MdEmail />
                      <input type="email" 
                      name="client_name" 
                      onChange={(e)=> setEmail(e.target.value)} 
                      placeholder="Your Email"
                      />
                </div>

                <div className='FormInputWrapingUser'>
                    <MdCall />
                      <input type="number" 
                      name="client_name" 
                      onChange={(e)=> setPhone(e.target.value)} 
                      placeholder="Your Phone"
                      />
                </div>

                <div className='FormInputWrapingUser'>
                    <FaRegAddressBook />
                      <input type="text" 
                      name="client_name" 
                      onChange={(e)=> setAddress(e.target.value)} 
                      placeholder="Your Address"
                      />
                </div>

            </div>

            <div className='userInformaitonTable'>
                <ul className='pb-0'>
                    <li><h4 className='ComingHeading'>Please arrive at least 5 minutes before your appointment time.</h4></li>
                    <li><h6>Service Information</h6></li>
                    <li>
                        <FaServicestack /> Beauty Mackup
                    </li>
                    <li>
                        <FaUser />  Raju Ahmed
                    </li>
                    <li>
                        <ul className='UlLiPriceTimeSlot'>
                            <li className='ChildTimeSlot '> <AiOutlineDollarCircle/> 50.00</li>
                            <li className='ChildTimeSlot'><BiTime /> 00:00</li>
                        </ul>
                    </li>
                    <li>
                        <BsCalendar2Date /> 25/04/2022
                    </li>
                </ul>

                <ul className='InfoListView'>
                    <li><h6>Your Information</h6></li>
                    <li><RiUser2Fill /><span>{name ? name : null }</span></li>
                    <li><MdEmail />{email ? email : null }</li>
                    <li><MdPhoneLocked />{phone ? phone : null }</li>
                    <li> <FaRegAddressBook /> {address ? address : null } </li>
                </ul>
          </div>


      </div>

    </div>
  )
}

export default UserInformationForm