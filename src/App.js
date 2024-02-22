import React from "react";
import { useState} from "react"



export default function App() {

  const [chkBox,setChkBox] = useState(true);
  const [chkBox1,setChkBox1] = useState(true);
  const [chkBox2,setChkBox2] = useState(true);
  const [chkBox3,setChkBox3] = useState(true);
  const [password,setPassword] = useState("");
  const [values, setValues] = useState(6);
  let capitalAlphaString = "ASDEWTTYGHYJKIUJUUUU";
  let smallAlphaString = "asdfretyhgbjhuiokiljuyt";
  let number = "0123456789";
  let specialCharacters = "@%^&*)(!";
  let  passwordChar = "";
  let temp = 0;
  let check = true;
 
  return (
    <div>
      <h3>Random Password Generator</h3>
    
      <span>password Length</span>
      <input type ="number" value={values} onChange={(e)=>setValues(e.target.value)} /><br></br>

      <input type ="checkbox" checked ={chkBox} onChange={()=>setChkBox(!chkBox)}/>
      <span>Capital letters included</span><div></div>

      <input type ="checkbox" checked ={chkBox1} onChange={()=>setChkBox1(!chkBox1)}/>
      <span>Small letters included</span><div></div>


      <input type ="checkbox" checked ={chkBox2} onChange={()=>setChkBox2(!chkBox2)}/>
      <span>Numbers included</span><div></div>

      <input type ="checkbox" checked ={chkBox3} onChange={()=>setChkBox3(!chkBox3)}/>
      <span>Special Characters included</span><div>---------</div><div>--------</div>



      <button onClick ={()=> {

        console.log("values",values,)

        while(check)
        {
       
          if (temp !== values && chkBox === true){
       let x = chkBox?passwordChar += (capitalAlphaString[Math.floor(Math.random() * capitalAlphaString.length)]) : "@@@@" 

        temp++;
        }
        else if(temp===values){
          check = false;
          break;
         
        }

     
        
        if (temp !== values && chkBox1 === true){
       let y = chkBox1 ? passwordChar += (smallAlphaString[Math.floor(Math.random() * smallAlphaString.length)]) : "@@@@" ;
        temp++;
        }
        else if(temp===values){
          break;
        
        }

        if (temp !== values && chkBox2 === true){
       let z = chkBox2 ? passwordChar += (number[Math.floor(Math.random() * number.length)]) : "@@@@" 
        temp++;
        }
        else if(temp===values){
          break;
        }

        if (temp !== values && chkBox3 === true){
        let q =chkBox3 ? passwordChar += (specialCharacters[Math.floor(Math.random() * specialCharacters.length)]) : "@@@@" 
        temp++;
        }
        else if(temp===values){
          break;
        }

      }

      temp=0;
       setPassword(passwordChar)

      //  alert(password)
     
        
      }
      }>Generate  Random Password</button>
      <h3>Generated Password : {password} </h3>
    </div>
  );
}

