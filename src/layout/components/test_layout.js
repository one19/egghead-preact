import { h } from 'preact';
import Header from './header';
import Content from './content';
import SubTitle from './sub_title';
import Paragraph from './paragraph';
import Quote from './quote';

export default () =>
  <div>
    <Header />
    <Content>
      <SubTitle>Some content:</SubTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea eius mollitia
         asperiores, accusamus animi corporis assumenda explicabo, doloribus officia laudantium.
         Tempora blanditiis, accusantium nesciunt maxime praesentium, autem pariatur amet!
      </Paragraph>
      <Quote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea eius mollitia
         asperiores, accusamus animi corporis assumenda explicabo, doloribus officia laudantium.
         Tempora blanditiis, accusantium nesciunt maxime praesentium, autem pariatur amet!
      </Quote>
      <SubTitle>Some more content:</SubTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea eius mollitia
         asperiores, accusamus animi corporis assumenda explicabo, doloribus officia laudantium.
         Tempora blanditiis, accusantium nesciunt maxime praesentium, autem pariatur amet!
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ea eius mollitia
         asperiores, accusamus animi corporis assumenda explicabo, doloribus officia laudantium.
         Tempora blanditiis, accusantium nesciunt maxime praesentium, autem pariatur amet!
      </Paragraph>
      <SubTitle>Closing statement.</SubTitle>
    </Content>
  </div>;
