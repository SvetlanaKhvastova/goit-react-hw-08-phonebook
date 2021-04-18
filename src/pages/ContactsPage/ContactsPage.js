import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm.container";
import Filter from "../../components/Filter/Filter.container";
import Contacts from "../../components/Contacts/Contact.container";
import { contactsOperations } from "../../redux/todos/index";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <Contacts />
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsPage);
