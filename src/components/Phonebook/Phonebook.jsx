import React, { Component } from 'react';

import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';

import style from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name,
      number,
    };
    const { contacts } = this.state;

    const result = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (result) {
      alert(`${name} is already in contacts`);
    } else {
      const newContacts = [...contacts];
      newContacts.push(newContact);

      this.setState({ contacts: newContacts });
    }
  };

  //==================================================== onDelete
  onDelete = name => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContacts = [...contacts];
      const foundIdx = newContacts.map(item => item.name).indexOf(name);
      if (foundIdx > -1) newContacts.splice(foundIdx, 1);
      return {
        contacts: newContacts,
      };
    });
  };

  //==================================================== changeFilter
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //==================================================== render
  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <div className={style.phonebook}>
          <h1 className={style.title}>Phonebook</h1>
          <Form onSubmit={this.addContact} />
          <h2 className={style.contactsTitle}>Contacts</h2>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={this.onDelete}
          />
        </div>
      </>
    );
  }
}

export default Phonebook;
