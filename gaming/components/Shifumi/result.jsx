import { useState, useEffect } from 'react'

import Image from 'next/image';

import styles from '../../styles/Shifumi.module.scss';

const Result = ({ weaponChoosed, reset, shifumi }) => {
  
  const [step, setStep] = useState(0);
  const [weaponRetrieve, setWeaponRetrieve] = useState(null)
  const [weaponChoosedFromIA, setWeaponChoosedFromIA] = useState(null)

  useEffect(()=>{
    retrieveMyWeapon();
    chooseWeaponForIA();

    const intervalID = setInterval(() => {
      setStep(step => step + 1 );
    }, 1500);

    setTimeout(() => {
      clearInterval(intervalID);
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  const retrieveMyWeapon = () => {
    const weapon = shifumi.find(weapon => weapon.name === weaponChoosed);
    setWeaponRetrieve(weapon);
  };

  const chooseWeaponForIA = () => {
    const choosedWeapon = randomIntFromInterval(1, 3);
    const weapon = shifumi.find(weapon => weapon.id === choosedWeapon);
    setWeaponChoosedFromIA(weapon)
  };

  return (
    <div> 
      {step === 0 && (
        <p className={styles.shifumi}>
          SHI...
        </p>
      )}

      {step === 1 && (
        <p className={styles.shifumi}>
          FU...
        </p>
      )}

      {step === 2 && (
        <p className={styles.shifumi}>
          MI !
        </p>
      )}

      {step > 2 && (
        <> 
          <h1> LET'S FIGHT !</h1>

          <section className={styles.fight}>
            <div className={styles.boxIcon}>
              <div className={styles.options_icon}>
                <Image
                  priority="true"
                  width="1772"
                  height="1772"
                  src={weaponRetrieve?.coloredImage}
                />
              </div>
            </div>
            
            <p>
              VS
            </p>
            
            <div className={styles.boxIcon}>
              <div className={styles.options_icon}>
                <Image
                  priority="true"
                  width="1772"
                  height="1772"
                  src={weaponChoosedFromIA.coloredImage}
                />
              </div>
            </div>
          </section>

          <button onClick={reset}>
            Rejouer 
          </button>
        </>
      )}
    </div>
  );
};

export default Result;