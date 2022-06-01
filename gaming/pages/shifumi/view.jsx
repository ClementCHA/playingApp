import styles from '../../styles/Shifumi.module.scss';

import InitialGame from '../../components/Shifumi/initialGame';

import Result from '../../components/Shifumi/result';

const View = ({ shifumi, handleClick, weaponChoosed, setWeaponChoosed, reset }) => {

  return (
    <section className={styles.container}>

      { !weaponChoosed && (
        <InitialGame
          shifumi={shifumi}
          handleClick={handleClick}
        />
      )}

      {}

     { weaponChoosed && (
        <Result 
          weaponChoosed={weaponChoosed}
          setWeaponChoosed={setWeaponChoosed}
          reset={reset}
          shifumi={shifumi}
        />
      )}




    </section>
  );
};

export default View;