import React from 'react'

export default function Alerts(props) {
  return (
    
    props.meassage  &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  {props.meassage}  
  
</div>

     
  )
}
