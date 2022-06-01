import View from './view';

import { useState } from 'react';

const Shifumi = ({shifumi}) => {

  const [weaponChoosed, setWeaponChoosed] = useState("");

  const handleClick = (o) => {
    setWeaponChoosed(o.name);
  };

  const reset = () => {
    setWeaponChoosed('');
  };

  return (
    <View 
      shifumi={shifumi}
      handleClick={handleClick}
      weaponChoosed={weaponChoosed}
      reset={reset}
    />
  );
};

export default Shifumi;

export async function getStaticProps() {
  const data = await import('/data/games.json');
  const shifumi = data.shifumi;

 if(!shifumi) {
    return {
      notFound: true
    };
  }; 

  return {
    props: {
      shifumi
    }
  };
}