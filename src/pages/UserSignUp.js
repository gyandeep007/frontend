import React, { useState } from 'react'

const UserSignUp = () => {
  const [user, setUser] = useState({
    displayName: '',
    firstName: '',
    lastName: '',
    password: '',
    password1: '',
  })
  // const user = {
  //   displayName: '',
  //   firstName: '',
  //   lastName: '',
  //   password: '',
  //   password1: '',
  // }
  const displayNameChangeHandler = (event) => {
    const name1 = event.target.value
    setUser({ ...user, displayName: name1 })
  }
  const firstNameChangeHandler = (event) => {
    const name1 = event.target.value
    setUser({ ...user, firstName: name1 })
  }
  const lastNameChangeHandler = (event) => {
    const name1 = event.target.value
    setUser({ ...user, lastName: name1 })
  }
  const passwordChangeHandler = (event) => {
    const name1 = event.target.value
    setUser({ ...user, password: name1 })
  }
  const password1ChangeHandler = (event) => {
    const name1 = event.target.value
    setUser({ ...user, password1: name1 })
  }
  const submitHandler = () => {
    console.log(user)
  }
  return (
    <div className="container">
      <h1 className="text-center">SignUp</h1>
      <div className="col-12 mb-3">
        <label className="form-label">Display Name</label>
        <input
          className="form-control"
          placeholder="Your Display Name"
          value={user.displayName}
          onChange={displayNameChangeHandler}
        ></input>
      </div>
      <div className="col-12 mb-3">
        <label className="form-label">First Name</label>
        <input
          className="form-control"
          placeholder="Your First Name"
          value={user.firstName}
          onChange={firstNameChangeHandler}
        ></input>
      </div>
      <div className="col-12 mb-3">
        <label className="form-label">Last Name</label>
        <input
          className="form-control"
          placeholder="Your Last Name"
          value={user.lastName}
          onChange={lastNameChangeHandler}
        ></input>
      </div>
      <div className="col-12 mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          placeholder="Your Password "
          type="password"
          value={user.password}
          onChange={passwordChangeHandler}
        ></input>
      </div>
      <div className="col-12 mb-3">
        <label className="form-label">Repeat password</label>
        <input
          className="form-control"
          placeholder="Re-enter Password "
          type="password"
          value={user.password1}
          onChange={password1ChangeHandler}
        ></input>
      </div>
      <div className="col-12 mb-3">
        <button className="btn btn-primary" onClick={submitHandler}>
          Sign up
        </button>
      </div>
    </div>
  )
}
export default UserSignUp
