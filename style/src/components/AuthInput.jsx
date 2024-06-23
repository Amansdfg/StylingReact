import {useState} from "react";
function AuthInput(){
    const[enteredEmail,setEnteredEmail]=useState("");
    const[enteredPassword,setEnteredPassword]=useState("");
    const[submited,setSubmited]=useState(false);

    function changeInput(name,value){
        if(name==="email"){
            setEnteredEmail(value);
        }else{
            setEnteredPassword(value);
        }
    }
    let emailNotValid=submited && !enteredEmail.includes("@");
    let passwordNotValid=submited && enteredPassword.trim().length<6;
    function handleClick(){
        setSubmited(true);
    }
    return(
    <main>
        <div id="input-container">
            <div className="controls">
                <p>
                    <label>Email</label>
                    <input 
                    className={emailNotValid?"invalid":undefined}
                    type="email"
                    required
                    onChange={(event)=>changeInput("email",event.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input 
                    className={passwordNotValid?"invalid":undefined}
                    type = "password" 
                    required
                    onChange={(event)=>changeInput("password",event.target.value)}
                    />
                </p>
            </div>
            <div id="action">
                <button className="create-button">Create new accaunt</button>
                <button className="sign-in " onClick={handleClick}>Sign in</button>
            </div>
        </div>
    </main>
    )
}
export default AuthInput;