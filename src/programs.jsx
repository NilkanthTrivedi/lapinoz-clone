import React from 'react'
import { useState } from 'react';
import Program_API from './API/program_api';

export default function Programs() {
    const[programdata,setprogramdata] = useState(Program_API)
    console.log(programdata);
  return (
    <>
    <section>
        <div className="container program-work">
            <h1 className='text-center main-heading'>Courses Available at Tops</h1>
        
            <div className="row d-flex justify-content-center">
                {programdata.map((curEle)=>{
                    const{id,logo,title,info}=curEle;
                    return(
                           <div className="col-lg-3 program-sub text-center border p-5 g-2 m-5" key={id}>
                                <i className={`font-icon ${logo}`}></i>
                                <h2 className='program-title'>{curEle.title}</h2>
                                <p>{curEle.info}</p>
                            </div> 
                    )
                })}
              
            </div>
        </div>
    </section>
    </>
  )
}
