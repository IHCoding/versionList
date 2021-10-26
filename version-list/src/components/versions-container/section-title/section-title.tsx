import React from 'react';
import styled from 'styled-components';

const VersionContainerSectionTitleRoot = styled.h3`
  font-variant: Quicksand;
  font-weight: 550;
  margin: 16px;
  font-size: 24px;
  display: inline-flex;
  justify-content: left;
`;

interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <VersionContainerSectionTitleRoot>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </VersionContainerSectionTitleRoot>
  );
};

export default SectionTitle;
