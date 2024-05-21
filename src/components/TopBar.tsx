import CategoryBar from "./CategoryBar";
import EventBar from "./EventBar";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <header>
      <EventBar />
      <NavBar />
      <CategoryBar />
    </header>
  );
};

export default TopBar;
