import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "../components/SetAvatar"
import Requests from "../utils/APICall/user"
export default function Register() {
  const navigate = useNavigate();
   const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
 const [isAvatarPage, setIsAvatarPage] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const {firstname, lastname, email } = values;
   if (firstname.length < 3) {
      toast.error(
        "First Name should be greater than 3 characters.");
      return false;
    } 
    else if (lastname.length < 3) {
      toast.error(
        "Last Name should be greater than 3 characters.");
      return false;
    }else if (email === "") {
      toast.error("Email is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      setIsAvatarPage(true)
  };
  const handleAvatar = async (avatardata)=>{
    if (handleValidation()) {
      const { firstname, lastname, email } = values;
      try {
        const response = await Requests.PostUserData({firstname,lastname,email,isAvatar:true,avatar: avatardata});
        if (response.status === 201) {
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(response.data)
          );
          toast.success("Account succesfully Created");
          navigate("/");
        } else {
          console.log(response.data);
        }
      } catch (error) {
        if (error) {
          console.log(error.response);
        }
      }
    }
  }

  return (
    <>
    {isAvatarPage? <Avatar handleAvatar={handleAvatar}/> :
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>BSS Chat</h1>
          </div>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
           <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      }
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
