import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../section-title';

interface Props {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

const VersionsContanerSectionRoot = styled.div`
  display: flex;
  flex-direction: column;

  :last-child {
    margin-bottom: 0;
  }
`;

const VersionsContainerSectionContent = styled.div`
  cursor: pointer;
  display: flex;
  overflow-x: auto;
  width: 100%;

  ::-webkit-scrollbar {
    border: solid 1px #d3d3d3;
    border-radius: 8px;
    height: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 7px;
    border: 3px solid transparent;
    background-clip: padding-box;
    height: 10px;
  }
`;

export const VersionsContainerSection: React.FC<Props> = ({
  title,
  children,
}: Props) => {
  return (
    <VersionsContanerSectionRoot>
      <SectionTitle title={title} />
      <VersionsContainerSectionContent>
        {children}
      </VersionsContainerSectionContent>
    </VersionsContanerSectionRoot>
  );
};

export default VersionsContainerSection;
