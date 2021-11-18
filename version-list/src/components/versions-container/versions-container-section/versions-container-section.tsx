import React from 'react';
import styled from 'styled-components';
import compareVersions from '../../../utils/cmd/compared-versions';
import { IVersionData } from '../../../utils/data-types/versions-types';

import SectionTitle from '../section-title';
import VersionsItems from '../versions-container-items';
import VersionsContainerToolbar from '../versions-container-toolbar';

interface Props {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  toolBar: any;
  versions: IVersionData[];
  handleAddVersion: () => void;
  handleRemoveVersion: (index: number) => void;
}

const VersionsContanerSectionRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
`;

const VersionsContainerSectionContent = styled.div`
  overflow-x: auto;
  width: 100%;
  max-height: 150px;
`;

const VersionsItemsContainer = styled.div`
  overflow-x: auto;
  display: flex;
  margin: 12px 0;
  margin-bottom: 16px;
  width: auto;
  padding-bottom: 18px;

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

const ToolbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VersionsContainerSection: React.FC<Props> = ({
  title,
  toolBar,
  versions,
  handleAddVersion,
  handleRemoveVersion,
}: Props) => {
  return (
    <VersionsContanerSectionRoot>
      <ToolbarHeader>
        <SectionTitle title={title} />

        <VersionsContainerToolbar
          activeButton={toolBar.activeButton}
          setActiveButton={toolBar.setActiveButton}
          handleAddVersion={handleAddVersion}
          formErrors={toolBar.formErrors}
        />
      </ToolbarHeader>
      <VersionsContainerSectionContent>
        <VersionsItemsContainer>
          {versions &&
            versions.map(
              ({ maxVersion, minVersion, operator, isConflicted }, key) => (
                <VersionsItems
                  key={key}
                  // isDuplicate={isConflicted}
                  isDuplicate={compareVersions(versions, {
                    maxVersion,
                    minVersion,
                    operator,
                  })()}
                  version={{ maxVersion, minVersion, operator }}
                  onClick={() => handleRemoveVersion(key)}
                />
              )
            )}
        </VersionsItemsContainer>
      </VersionsContainerSectionContent>
    </VersionsContanerSectionRoot>
  );
};

export default VersionsContainerSection;
