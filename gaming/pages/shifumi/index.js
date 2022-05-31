import View from './view';

const Shifumi = ({shifumi}) => {

  return (
    <View shifumi={shifumi} />
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