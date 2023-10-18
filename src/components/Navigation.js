import React ,{useState} from 'react'

export default function Navigation() {
  const changeColor=(color)=>{
    if(bgcolor===color){
      chbgcolor("white");
      return ;
    }
    chbgcolor(color);
  }
  const [bgcolor , chbgcolor]=useState("white");  
  document.body.style.background=bgcolor;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Editor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
      <ul style={{display:'flex'}}>
      <li><button type="button" className="btn mx-3" style={{backgroundColor:'green'}} onClick={()=>{changeColor("green")} }></button></li>
      <li><button type="button" className="btn mx-3" onClick={()=>changeColor("#6868e5")} style={{backgroundColor:'#6868e5'}}></button></li>
      <li><button type="button" className="btn mx-3" onClick={()=>changeColor("#7a7a33")} style={{backgroundColor:'#7a7a33'}}></button></li>
      <li><button type="button" className="btn mx-3" onClick={()=>changeColor("#994242")} style={{backgroundColor:'#994242'}}></button></li>
      <li><button type="button" className="btn mx-3" onClick={()=>changeColor("pink")} style={{backgroundColor:'pink'}}></button></li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}
