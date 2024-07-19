import styled from "@emotion/styled";

export const CardWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
paddind 15px;
row-gap: 15px;
    border-radius: 7px;
    border-right: 1px solid #f1f1f1;
    border-left: 1px solid #f1f1f1;
    padding: 10px;
    flex-basis: 100%;


p{
text-align: center;}

`;

export const CardBox = styled.div`
  padding: 10px;
  background-color: #464646;
  border-radius: 7px;
  border: 3px solid #fff;
`;

export const CardImageWrapper = styled.img`
  width: 300px;
  margin: -4rem 0;
`;

export const CardTextWrapper = styled.p`
  color: #f1f1f1;
  font-size: 17px;
`;
