import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import { contactsSelectors, contactsOperations } from '../../redux/todos';

Contacts.protoTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapStateToprops = state => ({
  isLoading: contactsSelectors.getLoading(state),
  contactsSearch: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  deleteContacts: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToprops, mapDispatchToProps)(Contacts);
