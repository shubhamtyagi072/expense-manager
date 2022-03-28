import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { login } from "../../Services/Apiservices";

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
       const requestBody = {name,email,user_id:uuidv4()}
       console.log(requestBody)
       login({requestBody}).then(res => console.log("res",res)).catch(err => console.log("err",err))
       
    }

    return (
      <div className="container_form">
        <form>
          <label>
            Enter Your Name:
            <input
              className="input"
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Enter Item Email:
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button className="button" onClick={onSubmit}>
            Add to calender
          </button>
        </form>
       </div>
    )
}

export default Login