import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <span className='badge bg-secondary fs-5'>News</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className='btn btn-primary m-2' onClick={()=>setCategory('business')}>Business</button>
          </li>
          <li className="nav-item">
          <button className='btn btn-info m-2' onClick={()=>setCategory('entertainment')}>Entertainment</button>
          </li>
          <li className="nav-item">
          <button className='btn btn-warning m-2' onClick={()=>setCategory('general')}>General</button>
          </li>
          <li className="nav-item">
          <button className='btn btn-danger m-2'
          onClick={()=>setCategory('sports')}>Sports</button>
          </li>
          <li className="nav-item">
          <button className='btn btn-success m-2'
          onClick={()=>setCategory('health')}>Health</button>
          </li>
          <li className="nav-item">
          <button className='btn btn-light m-2'
          onClick={()=>setCategory('technology')}>Technology</button>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar