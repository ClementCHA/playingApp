import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <ul>
        <li>
          <Link href='/'>
            <a>
              Accueil
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;