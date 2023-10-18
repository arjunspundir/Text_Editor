import React from 'react';
import { useState } from 'react';
let org="Inverse case";
export default function TextForm(props) {
    const wordLength=()=>{
        let n=text;
        n = n.trim();
        let res=0;
        // let word=true;
        for(let i=0;i<n.length;i++){
          if(n.charAt(i)===' ')
          continue ;
            while(i<n.length && n.charAt(i)!==' '){
          i++;
            }
        res++ ;
        }
        return res;
    }
    const clear = ()=>{
        changeText("");
    }
    const onchange=(event)=>{
        changeText(event.target.value);
        };
        const clicked =()=>{
            if(st==="lower"){
            changeText(text.toUpperCase());
            changest("upper");
        }
        else if(st==="upper"){
            changeText(text.toLowerCase());
            changest("lower");
            }
        
        
        };
        const beautify =()=>{
            let id=document.getElementById("my-box");
            if(id.style.color==="black"){
            id.style.backgroundColor="#4c1818";
            id.style.color="white";
            }
            else{
                id.style.backgroundColor="white";
            id.style.color="black";
            }
        }
    
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        const copy = () => {
          if (!isMobile) {
            // Perform the copy operation for non-mobile devices
            navigator.clipboard.writeText(text)
              .then(() => {
                // Handle success
              })
              .catch((error) => {
                // Handle the error
              });
          } else {
            // Provide a message or take alternative actions for mobile devices
            return "oops"
          }
        }
    const [text , changeText]=useState("Enter here");
    const [st , changest]=useState("lower");
  return (
    <>
  <div className="mb-3">
    <label htmlFor="my-box" className="form-label "><h3>Hare {props.heading} ,</h3><br/><h4>Enter your Text Below</h4></label>
    <textarea className="form-control" id="my-box" rows="6" value={text} onChange={onchange}></textarea>
    <button type="button" className="btn btn-secondary my-3 mx-2" onClick={clicked}>{org}</button>
    <button type="button" className="btn btn-secondary my-3 mx-2" onClick={clear}>Clear</button>
    <button type="button" className="btn btn-secondary my-3 mx-2"  id="beautify" onClick={beautify}>Bautify</button>
    <button type="button" className="btn btn-secondary my-3 mx-2" onClick={copy}>Copy Text</button>
  </div>
    <div className="container">
        <h5>Total :{wordLength()} words and {text.length} charcters</h5>
    </div>
    </>
  )
}
