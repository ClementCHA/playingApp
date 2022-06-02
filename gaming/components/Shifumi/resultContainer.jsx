import {useState, useEffect, useRef } from 'react';

import Result from './result'

const ResultContainer = ({ shifumi, reset, weaponChoosed }) => {
  
  const [step, setStep] = useState(0);
  const [weaponRetrieve, setWeaponRetrieve] = useState(null);
  const [weaponChoosedFromIA, setWeaponChoosedFromIA] = useState(null);

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
    return Math.floor(Math.random() * (max - min + 1) + min);
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

  return <Result 
    step={step} 
    weaponRetrieve={weaponRetrieve}
    reset={reset}
    weaponChoosedFromIA={weaponChoosedFromIA}
  />
};

export default ResultContainer;