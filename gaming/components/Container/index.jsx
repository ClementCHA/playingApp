import Navbar from '../Navbar';
import Head from "../Head";

const Container = (props) => {

  return (
    <>
      <Head />
      <Navbar />
      {props.children}
    </>
  );
};

export default Container;