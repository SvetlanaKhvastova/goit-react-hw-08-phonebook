import ProtoTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/todos';
import Filter from './Filter';

Filter.protoTypes = {
  filterSearch: ProtoTypes.string.isRequired,
  handlerFilterSearch: ProtoTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterSearch: contactsSelectors.getFilterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  filterContacts: text => dispatch(contactsActions.filterContacts(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
