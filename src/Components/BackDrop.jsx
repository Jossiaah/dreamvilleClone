import React from 'react'
import styled from 'styled-components'
import backdrop from './style/BackDrop.style.css'




const BackDrop = ({ sideBar }) => {
    return (
        <div className={sideBar ? " backdrop backdrop--open" : "backdrop"}>
        </div>
    )
}

export default BackDrop