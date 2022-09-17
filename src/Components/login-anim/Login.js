import React from 'react'
import './styles.css'
const Login = () => {
  return (
    <div className="box">
		<form autocomplete="off">
			<h2>Log in</h2>
			<div className="inputBox">
				<input type="text" required="required" label=""/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>

			<input type="submit" value="Login"/>
			<div className="links">
				<a href="#">Don't have an account ? </a>
				<a href="#">Signup</a>
			</div>
			
		</form>
	</div>
  )
}

export default Login