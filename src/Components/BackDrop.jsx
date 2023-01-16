import React from 'react'




const BackDrop = ({ sideBar }) => {
    return (
        <div className={sideBar ? " backdrop backdrop--open" : "backdrop"}>
        </div>
    )
}

export default BackDrop