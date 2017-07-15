import styled from 'styled-components';
import { color1, color2, titleHeight } from './index';

export default styled.div`
  width: 100%;
  padding-top: 0.4rem;
  height: ${titleHeight};
  background: linear-gradient(37deg, ${color1}, ${color2});
  border-bottom: 0.1rem solid #ddd;
  box-sizing: border-box;
  position: absolute;
  z-index: 9000;
`;
