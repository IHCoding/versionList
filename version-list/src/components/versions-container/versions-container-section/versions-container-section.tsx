import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../section-title';
import VersionsItems from '../versions-container-items';
import VersionsContainerToolbar from '../versions-container-toolbar';

interface Props {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  toolBar: any;
  versions: any[];
  handleAddVersion: () => void;
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
  padding-left: 15px;

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

const VersionsItemsContainer = styled.div`
  cursor: pointer;
  overflow-x: auto;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;

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
  toolBar,
  versions,
  handleAddVersion,
}: Props) => {
  return (
    <VersionsContanerSectionRoot>
      <SectionTitle title={title} />
      <VersionsContainerSectionContent>
        <VersionsContainerToolbar
          activeButton={toolBar.activeButton}
          setActiveButton={toolBar.setActiveButton}
          handleAddVersion={handleAddVersion}
        />
        <VersionsItemsContainer>
          {versions &&
            versions.map((version) => (
              <VersionsItems text={version}></VersionsItems>
            ))}
        </VersionsItemsContainer>
      </VersionsContainerSectionContent>
    </VersionsContanerSectionRoot>
  );
};

export default VersionsContainerSection;
