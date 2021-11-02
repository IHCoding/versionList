import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IVersionData } from '../../../utils/data-types/versions-types';
import { BTWN } from '../../../utils/global-values/operators-list-values/operators-list-values';
import SectionTitle from '../section-title';
import VersionsItems from '../versions-container-items';
import VersionsContainerToolbar from '../versions-container-toolbar';

interface Props {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  toolBar: any;
  versions: IVersionData[];
  handleAddVersion: () => void;
}

const VersionsContanerSectionRoot = styled.div`
  display: flex;
  flex-direction: column;
  :last-child {
    margin-right: 0;
  }
`;

const VersionsContainerSectionContent = styled.div`
  cursor: pointer;
  overflow-x: auto;
  margin-left: 15px;
  width: 100%;
  max-height: 150px;
  // display: flex;

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

const versionCollection: {
  [version: string]: number;
} = {};

export const VersionsContainerSection: React.FC<Props> = ({
  title,
  toolBar,
  versions,
  handleAddVersion,
}: Props) => {
  useEffect(() => {
    // @todo:
    // clean up / refactor the code below.
    // solve issues with global versionCollection
    // and performance .
    versions.forEach((version) => {
      if (versionCollection[version.maxVersion]) {
        versionCollection[version.maxVersion] =
          versionCollection[version.maxVersion] + 1;
      } else {
        versionCollection[version.maxVersion] = 1;
      }
    });
    console.log(versionCollection);
  }, [versions]);

  const isDuplicateElement = (version: string | null) => {
    if (!version) return false;
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
          //@todo
          // adjust the math calculation
          style={{ width: versions.length * 108 + 149 + 'px' }}
        >
          {versions &&
            versions.map(({ maxVersion, minVersion, operator }, key) => (
              <VersionsItems
                key={key}
                isDuplicate={isDuplicateElement(maxVersion)}
                text={
                  // @ts-ignore
                  operator === BTWN
                    ? `${minVersion} - ${maxVersion}`
                    : maxVersion
                }
              />
            ))}
        </VersionsItemsContainer>
      </VersionsContainerSectionContent>
    </VersionsContanerSectionRoot>
  );
};

export default VersionsContainerSection;
