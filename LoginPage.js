import {useRef} from "react";
import HomePage from "./HomePage";


function LoginPage(){
    const email=useRef()
    const password=useRef()

    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")



    
    function loginBtn(){
        if(email.current.value==="mtu@gmail.com" && password.current.value==="1234"){
            localStorage.setItem("emailData","mtu@gmail.com")
            localStorage.setItem("passwordData","1234")
            alert("Login Successfully")

        }
        else{
            alert("wrong credentials")
        }


    }
    return(
        <div>
            {
                getEmail&&getPassword ?<HomePage/>:
                <form>
                <h1>Login Page</h1>
                <input type="email" placeholder="email" ref={email}/>
                <input type="password" placeholder="password" ref={password}/>
                <button onClick={loginBtn}>Login</button>
            </form>

            }
            
            
        </div>
    )
}

export default LoginPage;
