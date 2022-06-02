import styles from '../../styles/Shifumi.module.scss';

import InitialGame from '../../components/Shifumi/initialGame';

import ResultContainer from '../../components/Shifumi/resultContainer';

const View = ({ shifumi, handleClick, weaponChoosed, reset }) => {

  return (
    <section className={styles.container}>

      { !weaponChoosed && (
        <InitialGame
          shifumi={shifumi}
          handleClick={handleClick}
        />
      )}

      { weaponChoosed && (
        <ResultContainer
          weaponChoosed={weaponChoosed}
          reset={reset}
          shifumi={shifumi}
        />
      )}

    </section>
  );
};

export default View;