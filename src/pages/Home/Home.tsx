import Header from "../../components/Header";
import Discovery from "../../containers/Discovery";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Discovery />
    </HomeWrapper>
  );
}

export default Home;
