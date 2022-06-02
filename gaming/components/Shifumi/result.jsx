import Image from 'next/image';

import styles from '../../styles/Shifumi.module.scss';

const Result = ({ step, weaponRetrieve, weaponChoosedFromIA, reset}) => {


  const userWeapon = weaponRetrieve?.name;
  const IAWeapon = weaponChoosedFromIA?.name;
  
  const possibleResult = () => {
    switch(true){
      case IAWeapon === "paper" && userWeapon === "paper":
      case IAWeapon === "scissors" && userWeapon === "scissors":
      case IAWeapon=== "stone" && userWeapon === "stone" :
        return <p className={styles.result}> It's a tie ! </p>; 
      case IAWeapon === "scissors" && userWeapon === "paper": 
      case IAWeapon === "paper" && userWeapon === "stone":
      case IAWeapon === "stone" && userWeapon === "scissors": 
        return <p className={styles.result}> You loose ! </p>;
      case userWeapon === "scissors" && IAWeapon === "paper": 
      case userWeapon === "paper" && IAWeapon === "stone":
      case userWeapon === "stone" && IAWeapon === "scissors" :
        return <p className={styles.result}> You win ! </p>;
  
    };
  };
  
  const getQuote = () => {
    switch (true) {
      case userWeapon === "scissors" && IAWeapon === "paper" :
      case userWeapon === "paper" && IAWeapon === "scissors" :
        return <p className={styles.quote}>Scissors cut paper</p>

      case userWeapon === "stone" && IAWeapon === "paper" :
      case userWeapon === "paper" && IAWeapon === "stone" :
        return <p className={styles.quote}>Paper wrap stone</p>

      case userWeapon === "stone" && IAWeapon === "scissors" :
      case userWeapon === "scissors" && IAWeapon === "stone" :
        return <p className={styles.quote}>Stone break scissors</p>
    };
  };
  

  return (
    <> 
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
        <section className={styles.section}>
          <h1 className={styles.lets_fight}>
            LET'S FIGHT !
          </h1>

          <section className={styles.fight}>
            <div className={styles.box}>
              <div className={styles.options_icon}>
                <Image
                  priority="true"
                  width="1772"
                  height="1772"
                  src={weaponRetrieve?.coloredImage}
                />
              </div>
              <span className={styles.opponent}>
                YOU
              </span>
            </div>
            
            <p className={styles.versus}>
              V.S
            </p>
            
            <div className={styles.box}>
              <div className={styles.options_icon}>
                <Image
                  priority="true"
                  width="1772"
                  height="1772"
                  src={weaponChoosedFromIA.coloredImage}
                />
              </div>
              <span className={styles.opponent}>
                IA
              </span>
            </div>
          </section>
          {possibleResult()}
          {getQuote()}
          <button onClick={reset}>
            Rejouer 
          </button>
        </section>

       
      )}
    </>
  );
};

export default Result;