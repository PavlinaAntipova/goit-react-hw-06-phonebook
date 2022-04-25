import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';

function ContactsList() {
  const filter = useSelector(state => state.contacts.filter);

  const contacts = useSelector(state => {
    const initState = state.contacts.items;
      const normalizeName = filter.toLocaleLowerCase();
      const filteredContacts = initState.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeName));
    return filteredContacts;
  });

  
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        
        {contacts.length
          ? contacts.map(contact => (
            <ContactItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))
          : 'No contacts here'}
      </ul>
    </>
  );
}

export default ContactsList;

