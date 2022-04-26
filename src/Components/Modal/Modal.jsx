import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus, toggle } from '../../Redux/BookingButtonSlice'
import {FaTimes} from 'react-icons/fa'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import './Modal.css';
import BookingForm from './BookingForm'
import UserInformationForm from './UserInformationForm'
import SuccessMgs from './SuccessMgs'


const Modal = () => {
    
    const status = useSelector(getStatus)
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);


    useEffect(()=>{
        if(status.show){
            document.querySelector('body').setAttribute('data-modal', "true");
        }else{
            document.querySelector('body').removeAttribute('data-modal');
        }
    },[status.show])


    function back(){
        let stepper = step-1; 
        if(stepper <= 1){
            stepper = 1;
        }

        setStep(stepper);
    }

    const next=()=>{
        let stepper = step+1; 
        if(stepper >= 3){
            stepper = 3;
        }
        
        setStep(stepper);
    }

    function handleModal(){
        dispatch(toggle(false));
    }

    const handleSubmit = ()=>{

    }

    return (
        <div className='modalContainer'>
            <div className='ModalHeader'>
                <h2>Book Your Appointment</h2>
                <FaTimes style={{cursor:'pointer'}} onClick={handleModal}/>
            </div>
            <div className='ModalBody'>
                <div>
                    {
                        (() => {
                            switch(step) {
                                case 1: {
                                    return (
                                        <BookingForm />
                                    )
                                }
                                break;
                                case 2: {
                                    return (
                                        <UserInformationForm />
                                    )
                                }
                                break;

                                case 3: {
                                    return (
                                        <SuccessMgs />
                                    )
                                }
                                break;
                            }
                        })()  
                    }

                </div>
            </div>
            <div className='ModalFooter'>
                <button className='btnSteper BtnBack' disabled={step && step <= 1 ? true : false } onClick={back}><MdOutlineDoubleArrow className="backicon"/> Back</button>
                {
                    step && step <= 2 ? (
                        <button className='btnSteper BtnSubmit' onClick={next}>Continue <MdOutlineDoubleArrow/></button>
                    ):
                    (
                        <button className='btnSteper BtnSubmit' onClick={handleModal}>Submit</button>
                    )
                }
                
            </div>
        </div>
    )
}

export default Modal