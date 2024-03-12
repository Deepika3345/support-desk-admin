import React, { useEffect } from "react";
import UserRow from "./UserRow";
import { useDispatch, useSelector } from "react-redux";
import { allProfiles } from "../features/getAllUsers/profileSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Users = () => {
  const {person}= useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!person){
      navigate('/login')

    }

  },[person])
  const {profiles}= useSelector(state => state.profile)
  const dispatch = useDispatch()
  // console.log(profiles)

  useEffect(()=>{
    dispatch(allProfiles())

  },[])

  return (
    <>
      <div className="container-fluid p-5">
        <table className="table table-dark table-striped">
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
           
              <th scope="col">email</th>
              <th scope="col">CreatedAt</th>
              
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              profiles.map((profile,index)=>  <UserRow key={profile._id} profile={profile} index={index}/>)
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
