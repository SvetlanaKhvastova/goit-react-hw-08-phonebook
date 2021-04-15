import { Component } from 'react';
import s from './ContactForm.module.css';
import Button from '../Button/Button';
import Label from './Label/Label';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    // console.log(e);
    // console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };

  handleSubmiteForm = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contactsForm, onSubmitForm } = this.props;

    this.reset();

    if (contactsForm.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    if (contactsForm.find(el => el.number.toLowerCase() === number)) {
      return alert(`${number} is already in contacts`);
    }

    const newContact = { name, number };
    // console.log(newContacts);

    onSubmitForm(newContact);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmiteForm, handleInputChange } = this;
    const { name, number } = this.state;

    return (
      <div className={s.block}>
        <form className={s.form} onSubmit={handleSubmiteForm}>
          <Label
            type="text"
            name="name"
            value={name}
            pattern="[A-Za-z]{1,}\s[A-Za-z]{1,}"
            placeholder="Svetlana Khvastova"
            inputChange={handleInputChange}
          />
          <Label
            type="tel"
            name="number"
            value={number}
            pattern="[+][0-9]{2}[0-9]{10}"
            placeholder="+380994183047"
            inputChange={handleInputChange}
          />
          <Button name="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
