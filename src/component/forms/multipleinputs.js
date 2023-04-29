import React, { useState } from 'react'

const Multipleinputs = () => {
  const[userRegistration, setuserRegistration]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });
  const[records,setRecords]=useState([]);
  const handleInput=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setuserRegistration({...userRegistration, [name]:value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={...userRegistration, id:new Date().getTime().toString()}
    setRecords([...records, newRecord])
    setuserRegistration({username:"",email:"",phone:"",password:""})
  }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>

          <div className="inputbox">
            <label htmlFor="username">Full Name</label><br />
            <input type="text" autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name='username' id="username" />
          </div>
          <div className="inputbox">
            <label htmlFor="email"> email</label><br />
            <input type="text" autoComplete='off'
            value={userRegistration.email}
            onChange={handleInput}
            name='email' id="email" />
          </div>
          <div className="inputbox">
            <label htmlFor="phone">Phone</label><br />
            <input type="text" autoComplete='off'
            value={userRegistration.phone}
            onChange={handleInput}
            name='phone' id="phone" />
          </div>
          <div className="inputbox">
            <label htmlFor="password">password</label><br />
            <input type="password" autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name='password' id="password" />
          </div>
          <button type='submit' className='btn'>Registration</button>
        </form>
        <div>
          {
            records.map((curEle)=>{
              const {id,username,email,phone,password}=curEle;
              return(
                <div className='showDataStyle' key={id}>
                 <p>Name: {username}</p>
                 <p>Email: {email}</p>
                 <p>Phone: {phone}</p>
                 <p>Password: {password}</p>
                  </div>
              )

            })
          }
        </div>
    </>
  )
}

export default Multipleinputs;