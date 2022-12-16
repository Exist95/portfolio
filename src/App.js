import styled from "styled-components";

function App() {
  return (
    <BackGround>
      <Header>
        <div>종열</div>
        <Menu>
          <div>홈</div>
          <div>소개</div>
          <div>프로젝트</div>
          <div>연락하기</div>
        </Menu>
      </Header>
      <Ex>asdasd</Ex>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  color: white;
  padding: 20px 0px 20px 20px;
  font-size: 20px;
  > div:nth-child(1) {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 40px;
  > div {
    cursor: pointer;
    &:hover {
      color: pink;
    }
  }
`;

const Ex = styled.div`
  background-color: green;
`;

export default App;
