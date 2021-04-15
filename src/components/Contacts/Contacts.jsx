import React, { Component } from 'react';
import Button from '../Button/Button';

import s from './Contacts.module.css';

class Contacts extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contactsSearch, deleteContacts, isLoading } = this.props;

    return (
      <ul className={s.contactsBlock}>
        {contactsSearch.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.flex}>
              <p>
                <span>{name}: </span>
                <span className={s.number}>{number}</span>
              </p>

              <Button
                name="Delete"
                type="button"
                onClick={() => deleteContacts(id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Contacts;
