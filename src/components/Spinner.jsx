import styled from 'styled-components';

const Spinner = ({ loading }) => {
  return (
    <SpinnerContainer>
      <div>
        <img src={loading} alt="" />
      </div>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export default Spinner;
