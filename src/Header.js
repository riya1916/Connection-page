import React from 'react'
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai"
import { RiAccountCircleFill } from "react-icons/ri"
import { Link } from 'react-router-dom';

function Header() {
return (
    <div className='Header'>
    
    <AiFillHome />
    <IoPersonAddOutline />
    <Link to='/search'>
    <AiOutlineSearch />
    </Link>
    
    <RiAccountCircleFill />
    </div>
    
  )
}

export default Header