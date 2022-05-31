import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Home.module.css';

export default function Home({gameList}) {

  return (
    <>
      <h1> Bienvenue sur votre site de jeux favoris ! 🤓</h1>

      <ul>
        {gameList.map(game =>
          <li key={game.id}>
            <Link href={`/${game.name}`}>
              <a>
                <div className={styles.icone}>
                  <Image
                    className={styles.image}
                    layout="responsive"
                    width="1772"
                    height="1772"
                    src={game.image}
                  />
                </div>

                <h2>{game.name.charAt(0).toUpperCase() + game.name.slice(1)}</h2>
              </a>
            </Link>

          </li>
          
        )}
      </ul>
    
    </>
  )
}

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
}
