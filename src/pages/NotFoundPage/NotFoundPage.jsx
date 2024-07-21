import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
