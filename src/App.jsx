import styled from "styled-components";

function App() {
  return (
    <Container>
      <span>Em breve</span>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: url("2.png") no-repeat;
  background-position: 50% 30%;
  background-size: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    text-align: center;
    position: relative;
    top: 300px;
    font-size: 1.4rem;
    color: black;
    background-color: white;
  }

  @media screen and (max-width: 600px) {
    /* top: 200px; */
    background-size: 500px;
  }
`;
