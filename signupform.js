import React,{useState} from 'react';


export default function LB  ( {setfeedBack} ) {
 
  

    let [fname, setfname] = useState("");
    let [lname, setlname] = useState("");
    let [review, setreview] = useState("");

    return (
        
            <div className="thirdbox">
                <br /><br />
            Your Name : <br /><br />
                <input
                    name="fname"
                    type="text"
                    value={fname}
                    placeholder="Enter your first name here..."
                    onChange={e => { setfname(e.target.value); }}/>


                <br/><br />

            User Name : <br /><br />
                <input
                    name="lname"
                    type="text"
                    value={lname}
                    placeholder="Enter your user name here..."
                    onChange={e => { setlname(e.target.value); }}
                />
                <br /><br />

            Email : <br /><br />
                <input
                    name="review"
                    type="text"
                    value={review}
                    placeholder="eg. name@email.com"
                    onChange={e => { setreview(e.target.value); }}
                />
                <br /><br />
                
                <br /><br/>

                <button onClick={e=>{
                    if(fname==='' || lname==='' || review==='')
                        alert("please fill in the fields")
                    else if(fname.length>40|| lname.length>40 || review.length>40)
                    {
                        alert("40 character limit!");
                    }
                    else{
                    
                                            setfname("");
                                           
                                            setlname("");
                                            setreview("");
                                            }
                                        }

                } >Sign Up!</button>
                   
                    
            </div>
        
    )

 }