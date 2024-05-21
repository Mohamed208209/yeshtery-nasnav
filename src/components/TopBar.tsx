import CategoryBar from "./CategoryBar";
import EventBar from "./EventBar";
import NavBar from "./NavBar";

const TopBar = ({ count }: { count: number }) => {
  return (
    <header>
      <EventBar />
      <NavBar count={count} />
      <CategoryBar />
    </header>
  );
};

export default TopBar;
