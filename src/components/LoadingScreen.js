import styled from "styled-components";

const Loader = styled.div`
  background-color: #030304;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const LoadingScreen = () => {
  return (
    <Loader>
      <Image src='/assets/images/loading.gif' />
    </Loader>
  );
};

export default LoadingScreen;
