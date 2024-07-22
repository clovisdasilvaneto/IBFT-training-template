import Typography from "../Typography";
import { FooterWrapper } from "./styled";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Typography component={"p"} color="light">
          CNPJ: 35.021.937/0001-28
        </Typography>
        <Typography component={"p"}>Política de Privacidade</Typography>
      </FooterWrapper>
    </>
  );
}

export default Footer;
