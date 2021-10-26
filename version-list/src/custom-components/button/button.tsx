import React from 'react';
import styled from 'styled-components';

interface ButtonRootProps {
  styles?: string;
  color: 'default' | 'primary' | 'secondary';
}

export const ButtonRoot = styled.button`
  font-size: 18px;
  font-family: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 4px 8px;
  min-width: 120px;
  height: 40px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: #f8fafc;
  color: #4f46e5;

  &:disabled {
    cursor: default;
    pointer-events: none;
    background-color: #efefef;
    color: #c3c3c3;
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: 'default' | 'primary' | 'secondary';
  styles?: {
    root?: string;
  };
}
const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  props: Props,
  ref
) {
  const {
    children,
    color = 'default',
    onClick,
    styles,
    type = 'button',
    ...rest
  } = props;

  return (
    <ButtonRoot ref={ref} color={color} onClick={onClick} type={type} {...rest}>
      {children}
    </ButtonRoot>
  );
});

export default Button;
