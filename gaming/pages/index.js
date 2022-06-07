import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Home.module.scss';

export default function Home({gameList}) {

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Bienvenue sur votre site de jeux favoris ! 🤓
      </h1>

      <ul className={styles.list}>

        {gameList.map(game =>

          <li key={game.id}>

            <Link href={`/${game.name}`}>
              <a className={styles.card}>
                <div className={styles.card_icon}>
                  <Image
                    layout="responsive"
                    width="1772"
                    height="1772"
                    src={game.image}
                  />
                </div>

                <h2
                  className={styles.card_title}
                  style={{fontFamily: `${game.font}`}}
                >
                  {game.name.charAt(0).toUpperCase() + game.name.slice(1)}
                </h2>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export async function getStaticProps(){
  const data = await import('/data/games.json');
  const gameList = data.gameList;

 if(!gameList) {
    return {
      notFound: true
    };
  };

  return {
    props: {
      gameList
    }
  };
};