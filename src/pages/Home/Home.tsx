import DiscoveryForm from "../../components/DiscoveryForm/DiscoveryForm";
import Header from "../../components/Header";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <DiscoveryForm />
    </HomeWrapper>
  );
}

export default Home;
