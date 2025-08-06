import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <section className='sidebar'>
        <div>
            <h1>Expenso</h1>
        </div>
        <div>Profile</div>
        <nav>
            <div className='navigation'>Expences</div>
            <div className='navigation'>Monthly</div>
            <div className='navigation'>Yearly</div>
            <div className='navigation'>Expences</div>
            <div className='navigation'>Expences</div>
        </nav>
    </section>
  )
}

export default Sidebar