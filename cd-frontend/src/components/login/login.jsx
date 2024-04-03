import React from 'react';
import './login.css';
import { useEffect } from 'react';
 function Login(){
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    return(
        <>
        <div className='main-conatainer'>
            <div className='login-content'>
                <h2 style={{fontFamily:'Poppins-Bold'}}>CLIENT DB</h2>
                <p style={{fontFamily:'Poppins-Thin'}}>Welcome back!Enter your creadentials to Login.</p>
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder='  Username or Email' style={{width:'350px',height:'40px',fontFamily:'Poppins-Thin'}} required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='  Password' style={{width:'350px',height:'40px',fontFamily:'Poppins-Thin'}} required />
                    </div>
                    <div >
                        <button className='login-btn' style={{fontFamily:'Poppins-Thin',height:'23px',width:'130px'}}>Login</button>
                    </div>
                </form>
                </div>
            
                <div className='img_container'>
                    
                    {/* <img src="" alt="Logo" width="600px" height="600px"></img> */}
                </div> 
            
            </div>
        
        </>
        
    )
}
export default Login;