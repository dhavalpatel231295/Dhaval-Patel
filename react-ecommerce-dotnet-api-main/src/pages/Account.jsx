import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import '../components/common.css';

const Account = () => {
  // State variables to store user details
  const [initialUsername, setInitialUsername] = useState('Deepak Vasoya');
  const [initialEmail, setInitialEmail] = useState('deepakvasoya123@gmail.com');
  const [initialPassword, setInitialPassword] = useState('*********');
  const [initialShippingAddress, setInitialShippingAddress] = useState('123, Main Street, Kitchener');

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newShippingAddress, setNewShippingAddress] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!newUsername || !newPassword || !newShippingAddress){
      setErrorMessage("All fields are required. Please fill in all the details.");
      return;
    }



    // Send a request to update the user's details to your backend API
    try {
      // Here, you can set the initial state variables to the new values entered by the user
      setInitialUsername(newUsername);
      setInitialEmail(newEmail);
      setInitialPassword(newPassword);
      setInitialShippingAddress(newShippingAddress);

      // After updating the initial data with user-provided values, you can reset the new values
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');
      setNewShippingAddress('');

      setSuccessMessage('User details updated successfully.');
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setErrorMessage('An error occurred while updating user details.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="pageHeader text-center">Account</h1>
        <hr />

        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
       

        <div className="row my-4 h-100">
          <div className="col-6">
        <h4 className='account-title col-6'>Current details</h4>

        
            <div className="form my-3">
              <label htmlFor="Name">Username:</label>
              <h5>{initialUsername}</h5>
            </div>
            <div className="form my-3">
              <label htmlFor="Email">Email</label>
              <h5>{initialEmail}</h5>
            </div>
            <div className="form my-3">
              <label htmlFor="Password">Password</label>
              <h5>{initialPassword}</h5>
            </div>
            <div className="form  my-3">
              <label htmlFor="Address">Shipping Address</label>
              <h5>{initialShippingAddress}</h5>
            </div>
          </div>
        

        <div className="col-md-6">
          <h4 className="account-title col-6">Modify Account Details</h4>
        
          <form onSubmit={handleSubmit}>
          <div className="form my-3">

              <label htmlFor="newUsername">New Username:</label>
              <input
                  type="text"
                  className="form-control"
                  id="newUsername"
                  placeholder="Enter new username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div className="form my-3">
              <label htmlFor="newPassword">New Password</label>
              <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
            </div>
            <div className="form  my-3">
              <label htmlFor="newShippingAddress">New Shipping Address</label>
              <input
                type="text"
                className="form-control"
                id="newShippingAddress"
                placeholder="Enter new shipping address"
                value={newShippingAddress}
                onChange={(e) => setNewShippingAddress(e.target.value)}
              />
            </div>
            <div>
                <button className="my-2 mx-auto btn" style={{ color: '#F9AB42', borderColor: '#F9AB42'}} type="submit">
                  Save Changes
                </button>
              </div>
            
          </form>
        </div>
        
        </div>
        </div>
      <Footer />
    </>
  )
}

export default Account