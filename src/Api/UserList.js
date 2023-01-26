import React, { useEffect, useState } from "react";
import axios from "axios"
import './UserList.css'

const UserList = () => {
    const [listOfUSer , setListOfUSer ] = useState([]); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => { setListOfUSer(response.data) }) 
            .catch(error => setError(error)); 
        }, []);

    return (
        <div className="main">
            <h1> List Of USer </h1>
            <div className="users">
                {listOfUSer.map(user => 
                    <div key={user.id} className="user">
                        <h6><span> Name & User Name:</span> {user.name} {user.username}</h6>
                        <h6><span>email:</span> {user.email}</h6>
                        <h6><span>address:</span> {user.address.street}-{user.address.suite}-{user.address.city}-{user.address.zipcode}</h6>
                        <h6><span>address-geo:</span> {user.address.geo.lat}-{user.address.geo.lng}</h6>
                        <h6><span>phone:</span> {user.phone}</h6>
                        <h6><span>website:</span> {user.website}</h6>
                        <h6><span>company:</span> {user.company.name}- {user.company.catchPhrase}</h6>
                    </div>
                )}
            </div>
        </div>
    );
};
export default UserList;