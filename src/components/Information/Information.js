import React from 'react'
import { Link } from 'react-router-dom';
import "./Information.css"; 
import {AiOutlineLink} from "react-icons/ai";
import {ImLocation} from "react-icons/im";

const Information = ({avatar,name,bio,blog,location,twitter,profile}) => {

  return (
   <div className="info-card">
        <div className="image-container">
            <img src={avatar} alt="avatar" />
            <div className="link-container">
            <AiOutlineLink className='icon'/>
            <p>{profile}</p>
            </div>
        </div>
        <div className="info-container">
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>{blog}</p>
            <div className="link-container">
            <ImLocation className='icon'/>
            <p>{location}</p>
            </div>
            <p>{twitter}</p>
        </div>
   </div>
  )
}

export default Information