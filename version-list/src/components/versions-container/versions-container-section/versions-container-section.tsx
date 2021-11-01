import React, { useEffect } from 'react';
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
`;

const VersionsContainerSectionContent = styled.div`
  cursor: pointer;
  overflow-x: auto;
  margin-left: 15px;

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
  }
`;

const VersionsItemsContainer = styled.div`
  overflow-x: auto;
  display: block;
  margin: 10px 0;
  margin-bottom: 16px;
`;

const ToolbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const versionCollection: any = {};

export const VersionsContainerSection: React.FC<Props> = ({
  title,
  toolBar,
  versions,
  handleAddVersion,
}: Props) => {
  useEffect(() => {
    versions.forEach((version: any) => {
      if (versionCollection[version]) {
        versionCollection[version] = versionCollection[version] + 1;
      } else {
        versionCollection[version] = 1;
      }
    });
    console.log(versionCollection);
  }, [versions]);

  const isDuplicateElement = (version: string) => {
    return versionCollection[version] > 1;
  };

  return (
    <VersionsContanerSectionRoot>
      <ToolbarHeader>
        <SectionTitle title={title} />

        <VersionsContainerToolbar
          activeButton={toolBar.activeButton}
          setActiveButton={toolBar.setActiveButton}
          handleAddVersion={handleAddVersion}
        />
      </ToolbarHeader>
      <VersionsContainerSectionContent>
        <VersionsItemsContainer
          style={{ width: versions.length * 108 + 143 + 'px' }}
        >
          {versions &&
            versions.map((version, key) => (
              <VersionsItems
                key={key}
                isDuplicate={isDuplicateElement(version)}
                text={version}
              />
            ))}
        </VersionsItemsContainer>
      </VersionsContainerSectionContent>
    </VersionsContanerSectionRoot>
  );
};

export default VersionsContainerSection;
