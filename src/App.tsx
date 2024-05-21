import useCounter from "./components/custom hooks/useCounter";
import Footer from "./components/Footer";
import Product from "./components/Product";
import TopBar from "./components/TopBar";

const App = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <>
      <TopBar count={count} />
      <Product />
      <Footer />
    </>
  );
};

export default App;
