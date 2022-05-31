import styles from '../../styles/Shifumi.module.scss';

import Image from 'next/image'

const View = ({shifumi}) => {

  return (
    <section className={styles.container}>
      <ul>
        {shifumi.map(option =>
          <li key={option.id}>

            <h3>{option.name}</h3>

            <div className={styles.icone}>
              <Image
                priority="true"
                layout="responsive"
                width="1772"
                height="1772"
                src={option.image}
              />
            </div>

            <span>
              {option.description}
            </span>

          </li>
        )}
      </ul>
    </section>
  );
};

export default View;