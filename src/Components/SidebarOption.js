import React from 'react'
import './SidebarOption.css'

function SidebarOption({ selected, Icon, title }) {
    return (
        <div className={`sidebarOption  ${selected && 'sidebarOption--active'}`} >
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarOption
