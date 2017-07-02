import styled from 'styled-components';
import { lighter1, lighter2 } from '../styles';

export default styled.div`
  width: 90%;
  margin: 5vh auto;
  height: 80vh;
  background: linear-gradient(37deg, ${lighter1}, ${lighter2});
  content-sizing: border-box;
  padding: 15px;
`;
