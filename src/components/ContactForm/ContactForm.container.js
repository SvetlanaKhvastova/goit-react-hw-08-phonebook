import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import { contactsSelectors, contactsOperations } from '../../redux/todos';

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
};

const mapStateToProps = state => ({
  contactsForm: contactsSelectors.getAllcontacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: text => dispatch(contactsOperations.addContacts(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
