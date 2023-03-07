import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { getRU } from './util/RandomUser'
import { Link } from "react-router-dom";
import QuestionPop from './QuestionPop'
const SIWE = ({ onSignIn }) => {
  const [address, setAddress] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //check localstorage for username and address
    //if no username, gen a random one and set it, in storage and app
    //if username and no address, load it
    //if address, 
    const sUN = localStorage.getItem('username');
    const sAddr = localStorage.getItem('address');
    if (sUN) {
      setUsername(sUN);
    } else {
      const randomUsername = getRU();
      setUsername(randomUsername);
      localStorage.setItem('username', randomUsername);
    }
    if (sAddr) {
      setAddress(sAddr);
      onSignIn(sAddr);
    }
    else {
      onSignIn(localStorage.getItem('username'))
    }
  }, [])

  const handleSignIn = async () => {
    try {
      // Check if the user has an Ethereum provider (e.g. MetaMask) installed
      if (!window.ethereum) {
        throw new Error('No Ethereum provider detected');
      }

      // Request permission to access the user's Ethereum account
      await window.ethereum.enable();

      // Create a Web3 instance
      const web3 = new Web3(window.ethereum);

      // Get the user's Ethereum address
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];

      // Save the user's address in the component's state
      setAddress(userAddress);

      // Call the callback function with the user's address
      onSignIn(userAddress);
      localStorage.setItem('address', userAddress);
    } catch (err) {
      setError(err.message);
    }
  }
  let killAuthor = () => {
    setAddress(null)
    localStorage.removeItem('address');
    onSignIn(username)
  }

  return (
    <div >
      {/* {address ? (
        // If the user's address is available, show it
        <div className="navelement"><p>Signed: <Link to="/profile">{address.substring(0, 5) + '..'}</Link>
          <button onClick={killAuthor}>Disconnect</button></p></div>
      ) : (
        // Otherwise, show the sign-in button
        <div className="navelement"><p>using&nbsp;anon&nbsp;alias: <Link to="/profile">{username}</Link></p>
          <button onClick={handleSignIn}>Sign in with Ethereum</button><span><QuestionPop /></span></div>
      )}
      {error && <p>Error: {error}</p>} */}

      
    </div>
  );

}
export default SIWE