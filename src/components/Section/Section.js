import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    title: 'Where is your title?',
    children: <></>,
  };

  render() {
    return (
      <>
        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>{this.props.title}</h2>
          {this.props.children}
        </section>
      </>
    );
  }
}

export default Section;
