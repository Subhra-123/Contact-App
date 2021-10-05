import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    
    const renderList=props.contacts.map(contact=>{
        
            return(
                <ContactCard  contact={contact} deleteContact={deleteContactHandler}/>
            )
        
    })
    
    return (
        <div className="ui celled list">
            {renderList}
        </div>
    )
}

export default ContactList
