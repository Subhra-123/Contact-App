import React,{useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

const App = () => {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
 
  const AddContactHandler=(contact)=>{
    // console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
    console.log(contacts);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }
  const removeContactHandler=(id)=>{
      const newContactList=contacts.filter(contact=>{
        return contact.id!==id
      })
    setContacts(newContactList);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  
  return (
    <div className="ui container">
      <Header/>
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  )
}

export default App
