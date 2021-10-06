import React from 'react';
import image from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = ({contact,deleteContact}) => {
    return (
        <div className="item" style={{ position: "relative" }}>
            <img className="ui avatar image " src={image} alt={image}/>
            <div className="content">
                <Link to={{pathname:`/contact/${contact.id}`,state:{contact:contact}}}>
                  <div className="header">{contact.name}</div>
                  <div>{contact.email}</div>
                </Link>
              
                
            </div>
            <i onClick={()=>deleteContact(contact.id)} 
            className="trash alternate outline icon" style={{ position: "absolute", top: "10px", right: "0", fontSize: "20px", color: "red" }} ></i>
        </div>
    )
}

export default ContactCard
