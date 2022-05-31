import Navbar from '../Navbar';
import Header from "../Header";

const Container = (props) => {

  return (
    <>
      <Navbar />
      <Header />
      {props.children}
    </>
  );
};

export default Container;