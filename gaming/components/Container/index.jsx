import Navbar from '../Navbar';

const Container = (props) => {

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Container;