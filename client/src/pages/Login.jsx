import react from "react"

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="UserName" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        
        <div className="remember-forget">
          <label><input type="checkbox" />remember me</label>
          <a href="#">forget password?</a>
        </div>
      
      <button type="submit">Login</button>
      
      <div className="register-link">
        <p>Your first time hear? <a href="#">Register</a></p>
      </div>
      </form>
    </div>
  )
}

export default Login