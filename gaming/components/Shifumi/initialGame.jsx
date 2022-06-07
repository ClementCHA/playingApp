import styles from "../../styles/Shifumi.module.scss";

import Image from 'next/image';

const InitialGame = ({shifumi, handleClick}) => {
  return (
    <>
      <h1 className={styles.title}>
      Choose your weapon !
      </h1>

      <ul className={styles.options}>
        {shifumi.map(option =>
          <li
            key={option.id}
            className={styles.options_card}
          >
            <button
              className={styles.options_button}
              style={{background: `${option.color}`}}
              onClick={() => handleClick(option)}
            >
              <div className={styles.options_icon}>
                <Image
                  priority="true"
                  width="1772"
                  height="1772"
                  src={option.image}
                />
              </div>

              <span className={styles.tooltip}>
                {option.description}
              </span>

            </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default InitialGame;