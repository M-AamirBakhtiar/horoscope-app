import styled from 'styled-components';

const Horoscope = ({ horoscope }) => {
  const { description, mood, compatibility, color, lucky_number, lucky_time, current_date } = horoscope;
  return (
    <HoroscopeContainer>
      <h1>{current_date} Horoscope</h1>
      <h2>{description}</h2>
      <h3>Your Mood Today: {mood}</h3>
      <h3>Your Lucky Number Today: {lucky_number}</h3>
      <h3>Your Lucky Time Today: {lucky_time}</h3>
      <h3>Your Lucky Color Today: {color}</h3>
      <h3>Your Compatible Zodiac Today: {compatibility}</h3>
    </HoroscopeContainer>
  );
};

const HoroscopeContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  background-color: #ececec;
  border: 1px solid #ececec;
  padding: 1em 1.2em;
  border-radius: 4px;
`;

export default Horoscope;
