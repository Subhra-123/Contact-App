import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderList = props.contacts.map(contact => {

        return (
            <ContactCard contact={contact} deleteContact={deleteContactHandler} />
        )

    })

    return (
        <div className="main" style={{position:'relative',marginTop:'100px'}}>
            <h2>ContactList</h2>
            <Link to="/add" style={{position:'absolute',top:0,right:0}}>
                <button className="ui button blue  ">Add contact</button>
                </Link>

            <div className="ui celled list">
                {renderList}
            </div>
        </div>

    )
}

export default ContactList
