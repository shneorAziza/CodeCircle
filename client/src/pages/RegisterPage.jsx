const RegisterPage = () => {
  return (
     <div className="wrapper">
    <form action="">
      <h1>Sign up</h1>
      <div className="input-box">
        <input type="text" placeholder="First Name" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Last Name" required />
      </div>
      <div className="input-box">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="UserName" required />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
      </div>
    
    <button type="submit">Sign up</button>
    
    <div className="login-link">
      <p>Already have an account? <a href="#">Login</a></p>
    </div>
    </form>
  </div>
  )
}

export default RegisterPage