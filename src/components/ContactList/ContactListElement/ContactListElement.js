import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListElement.module.scss';

class ContactListElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    whenDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        {this.props.name}: {this.props.number}
        <button
          className={styles.ContactListElement__Button}
          type="button"
          onClick={this.props.whenDelete}
        >
          Delete
        </button>
      </>
    );
  }
}

export default ContactListElement;
