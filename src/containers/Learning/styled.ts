import styled from "@emotion/styled";

export const LearningWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.dark.main};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  padding: 80px 20px;

  h2 {
    font-size: 34px;
  }

  p {
    margin: 0;
  }
`;

export const BoxWrapper = styled.div`
  heigth: auto;
  display: flex;
  justify-content: space-evenly;
  column-gap: 30px;
`;
