import Header from "../../components/Header";
import Discovery from "../../containers/Discovery";
import Learning from "../../containers/Learning";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Discovery />
      <Learning />
    </HomeWrapper>
  );
}

export default Home;
