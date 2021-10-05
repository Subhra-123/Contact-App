import React from 'react';
import image from '../images/user.png';

const ContactCard = ({contact,deleteContact}) => {
    return (
        <div className="item" style={{ position: "relative" }}>
            <img className="ui avatar image " src={image} alt={image}/>
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
                
            </div>
            <i onClick={()=>deleteContact(contact.id)} 
            className="trash alternate outline icon" style={{ position: "absolute", top: "10px", right: "0", fontSize: "20px", color: "red" }} ></i>
        </div>
    )
}

export default ContactCard
