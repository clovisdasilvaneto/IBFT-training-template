import { CardImageWrapper, CardWrapper, CardBox, CardTextWrapper } from "./styled"
import imgUrl from '../../assets/img/AULA-01-NOVO.webp'
import Typography from "../Typography"


//function CardBox(props) {
//   return(
  //    <CardTitleWrapper>{props.children}</CardTitleWrapper> 
    //)
  //}

  function CardImage(props) {
    return(
    <CardImageWrapper src={imgUrl}  alt="jairsFace" />)
  }

  function CardNovo({component, children}: any) {
    return(
      <CardBox>

        <Typography component={component} >{children}</Typography>
      </CardBox>
    )
  }

  function LearningCard(props) {
    return(
      <CardWrapper>
        <CardNovo component="span">AULA 1</CardNovo>
      
      <CardImage />
      <CardNovo component="span">05/08 ÀS 20H</CardNovo>
      
      <Typography component="p" >QUALQUER PESSOA PODE SER TERAPEUTA?</Typography>
      <Typography component="p" font="Poppins" >Você vai encontrar essa resposta e também vai ter um entendimento profundo sobre como você, seus pensamentos e suas emoções funcionam.</Typography>
      </CardWrapper>
    )
  }

  export default LearningCard;

