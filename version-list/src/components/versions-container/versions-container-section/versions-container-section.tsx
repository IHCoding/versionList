import React from 'react';
import styled from 'styled-components';
import { IVersionData } from '../../../utils/data-types/versions-types';
import {
  BTWNEAEB,
  BTWNIAEB,
  BTWNIAIB,
  GTE,
  LTE,
} from '../../../utils/global-values/operators-list-values/operators-list-values';
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
  const printVersionRange = ({ operator, minVersion, maxVersion }: any) => {
    switch (operator) {
      case LTE:
        return `<=${maxVersion}`;
      case GTE:
        return `>=${maxVersion}`;
      case BTWNIAIB:
        return `[${minVersion} ${maxVersion}]`;
      case BTWNIAEB:
        return `[${minVersion} <${maxVersion}[`;
      case BTWNEAEB:
        return `]${minVersion}  <${maxVersion}[`;
      default:
        return maxVersion;
    }
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
        <VersionsItemsContainer>
          {versions &&
            versions.map(
              ({ maxVersion, minVersion, operator, isConflicted }, key) => (
                <VersionsItems
                  key={key}
                  isDuplicate={isConflicted}
                  text={printVersionRange({ minVersion, maxVersion, operator })}
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
