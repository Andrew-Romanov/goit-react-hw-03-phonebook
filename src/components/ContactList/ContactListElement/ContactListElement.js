import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListElement.module.scss';

class ContactListElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    whenDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li className={styles.ContactListElement} key={this.props.id}>
        {this.props.name}: {this.props.number}
        <button
          className={styles.ContactListElement__Button}
          type="button"
          onClick={() => this.props.whenDelete(this.props.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListElement;
