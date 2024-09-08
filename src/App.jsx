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
  background: url("1.png") no-repeat;
  background-position: 50% 30%;
  background-size: 100%;

  span {
    width: 100%;
    text-align: center;
    position: relative;
    top: 300px;
    color: black;
    background-color: white;
  }
`;
