import React, {useState} from 'react'
import '../MyCss/MyCustomStylesheet.css'
import avatarImg from '../images/avatars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
// import * as fab from '@fortawesome/free-brands-svg-icons';
import CameraComponent from './CameraComponent'

export default function Main() {
  const [dataFromChild, setDataFromChild] = useState(avatarImg);
  const handleDataFromChild = (data) => {
    // Update the state with data received from the child component
    setDataFromChild(data);
    console.log(dataFromChild);

  };
  return (
    <div className='tall myWidth GreenishBG d-flex justify-content-center align-items-center MainSection text-center'>
    <div className='w-100 justify-content-center d-flex'>
      <div className='w-50 '>
        <img id='imageDisplay' className='AvatarMainPic my-3' src={dataFromChild} alt='avatar' />
        <h1 className='bigga'>Welcome to VetRo</h1>
        <div className=''>
        <CameraComponent sendDataToParent={handleDataFromChild}/>
        </div>
        <div className="starArea d-flex justify-content-center my-3 align-items-center ">
          <div className="whiteLine"></div>
          <FontAwesomeIcon className='px-3' icon={fa.faStar} />
          <div className="whiteLine"></div>
        </div>
        <p>Your Expert Veterinary assitant</p>
      </div>
    </div>

  </div>
  )
}
