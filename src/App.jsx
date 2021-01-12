import { useState } from 'react';
import axios from 'axios';

import StarInput from './components/StarInput';
import { zodiacs } from './zodiacSigns';
import loading from './img/Spin-1s-100px.svg';
import Spinner from './components/Spinner';
import Horoscope from './components/Horoscope';
import GlobalStyles from './components/GlobalStyle';

function App() {
  const [sign, setSign] = useState('');
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [horoscope, setHoroscope] = useState(null);

  const handleChange = (e) => {
    setSign(e.target.value.toLowerCase());
  };

  const getHoroscope = async () => {
    try {
      setHoroscope(null);
      setIsLoading(true);
      const res = await axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`);
      const result = await res.data;
      setIsLoading(false);
      setHoroscope(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!zodiacs.includes(sign)) {
      setError(true);
      setErrorMessage(`${sign} is not a Zodiac Sign. Please enter a valid one`);
      setSign('');
      setTimeout(() => {
        setError(null);
        setErrorMessage('');
      }, 4000);
    } else {
      setSign('');
      getHoroscope();
    }
  };

  return (
    <>
      <GlobalStyles />
      <StarInput starSign={sign} handleChange={handleChange} handleClick={handleClick} error={error} errorMessage={errorMessage} />
      {isLoading && <Spinner loading={loading} />}
      {horoscope && <Horoscope horoscope={horoscope} />}
    </>
  );
}

export default App;
