import React from 'react';

const RB=({feedBack})=>
{
    return(
        <>
       
            <div className="secondbox">
            
                {feedBack.map((d)=>{
                return (
                    <>
                        <br/>
                        <div className="feed">
                        <h2>{d.firstname} {d.middlename} {d.lastname}  {d.post}</h2>
                        </div>
                    
                    </>
                );})}
            </div>

        
        </>
    )
};
export default RB;