import { Component } from 'react';
import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    whenChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <label>
          {`Find by Name: `}
          <input
            className={styles.Filter}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.props.filterValue}
            onChange={this.props.whenChange}
          />
        </label>
      </>
    );
  }
}

export default Filter;
