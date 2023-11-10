import "./index.css";
import Header from "../../components/layout/header/Header";
import NavBar from "../../components/layout/navbar/NavBar";
import NavBarIcon from "../../components/layout/navbar/NavBarIcon";
import MainBox from "../../components/infoBox/MainBox";
import SubBox from "../../components/infoBox/SubBox";

const Home: React.FC<any> = () => {
  return (
    <div id="home" className="relative">
      <Header />
      <NavBar />
      <NavBarIcon />
      <MainBox />
      <SubBox />
    </div>
  );
};

export default Home;
