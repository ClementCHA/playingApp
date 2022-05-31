import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>

      <Link href='/'>
        <a>
          Accueil
        </a>
      </Link>

    </nav>
  );
};

export default Navbar;