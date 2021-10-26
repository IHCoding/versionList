import React from 'react';

import styled, { css } from 'styled-components';

export const MAX_WIDTH_XS = '444px';

const maxWidths = {
  xs: css`
    @media (min-width: ${(props) => `${props.theme.breakpoints.values.xs}px`}) {
      max-width: ${MAX_WIDTH_XS};
    }
  `,
  sm: css`
    ${(props) => props.theme.breakpoints.up('sm')} {
      max-width: ${(props) => `${props.theme.breakpoints.values.sm}px`};
    }
  `,
  md: css`
    ${(props) => props.theme.breakpoints.up('md')} {
      max-width: ${(props) => `${props.theme.breakpoints.values.md}px`};
    }
  `,
  lg: css`
    ${(props) => props.theme.breakpoints.up('lg')} {
      max-width: ${(props) => `${props.theme.breakpoints.values.lg}px`};
    }
  `,
};

export const ContainerRoot = styled.div<Props>`
  width: 100%;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  padding: 0 16px;

  @media (min-width: ${(props) => `${props.theme.breakpoints.values.sm}px`}) {
    padding: 20px;
  }
`;

interface Props {
  children: React.ReactNode | React.ReactNode[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const Container: React.FC<Props> = (props: Props) => {
  const { children, maxWidth = 'lg' } = props;

  return <ContainerRoot maxWidth={maxWidth}>{children}</ContainerRoot>;
};

export default Container;
