import s from './Title.module.css';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
