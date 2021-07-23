import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactListElement from './ContactListElement';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  static propTypes = {
    currentState: PropTypes.shape({
      contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      filter: PropTypes.string,
    }).isRequired,
    whenDelete: PropTypes.func.isRequired,
  };

  render() {
    const filteredContacts = this.props.currentState.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.props.currentState.filter.toLowerCase()),
    );

    return (
      <>
        <ul className={styles.ContactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListElement
              key={id}
              id={id}
              name={name}
              number={number}
              whenDelete={this.props.whenDelete}
            />
            // <li key={id}>
            //   {name}: {number}
            // </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
