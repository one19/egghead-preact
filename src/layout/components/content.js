import { h } from 'preact';
import styled from 'styled-components';
import ContentStyle from '../styles/content_style';
import { complimentLighter1, complimentLighter2 } from '../styles';

const ContentBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(37deg, ${complimentLighter2}, ${complimentLighter1});
`;

export default ({ children }: Object) =>
  <ContentBackground>
    <ContentStyle>
      {children}
    </ContentStyle>
  </ContentBackground>;
