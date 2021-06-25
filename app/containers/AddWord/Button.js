import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ff851b;
  border-radius: 3px;
  background: ${props => (props.primary ? '#FF851B' : 'white')};
  color: ${props => (props.primary ? 'white' : '#FF851B')};
`;

export default Button;
