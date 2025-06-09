import { useState } from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";

 

const SignUp = ()=>{

     const [isLogin, setIsLogin] = useState(true);
     const [role, setRole] = useState('buyer');
     const Navigate = useNavigate();
    const handlelogin = () =>{
        if(role == 'seller'){
            Navigate('/SellerHome');
        }
        else{
            Navigate('/Buyer');
        }
     }
    const SellerHandle = () =>{
        Navigate('/SellerHome');
    };
    const BuyerHandle = () =>{
        Navigate('/Buyer');
    }

  
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button 
                        className={isLogin ? 'active' : ""} 
                        onClick={() => {setIsLogin(true);
                        }}
                    >
                        LogIn
                    </button>
                    <button 
                        className={!isLogin ? 'active' : ""} 
                        onClick={() => setIsLogin(false)}
                    >
                        SignUp
                    </button>
                </div>
                {isLogin ? <>
                <div className="form">
                    <input type="Email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    <a href="#">Forgot password</a>
                    <button className="bttn"  onClick={()=> handlelogin()}>Login</button>
                </div>
                </>: <>
                <div className="form">
                    <input type="Email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                     <input type="confirm password" placeholder="confirm password" />
                     <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                     
                    <button className="bttn" onClick={() => handlelogin()}>Sign In</button>
                </div>
                </>}
            </div>
        </div>
    );
}

export default SignUp;
