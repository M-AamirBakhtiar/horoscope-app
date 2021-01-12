import styled from 'styled-components';

const StarInput = ({ starSign, handleChange, handleClick, error, errorMessage }) => {
  return (
    <SearchContainer>
      {error && (
        <ErrorContainer>
          <p>{errorMessage}</p>
        </ErrorContainer>
      )}
      <input value={starSign} onChange={handleChange} type="text" name="sign" placeholder="Enter your Zodiac Sign" />
      <button disabled={starSign === '' ? true : ''} onClick={handleClick}>
        Get Horoscope
      </button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  max-width: 450px;
  margin: 5em auto 2em;
  input {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
  }
  button {
    color: #242424;
    margin-top: 1em;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const ErrorContainer = styled.div`
  color: red;
  font-size: 1rem;
  margin-bottom: 1em;
  border: 3px solid red;
  text-align: center;
  border-radius: 5px;
`;

export default StarInput;
