import React, { useState } from 'react';
import styled from 'styled-components';
import VersionsContainerInput from './versions-container-operators';
import VersionsContainerSection from './versions-container-section';

const VersionsContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eff2f7;
  border-radius: 8px;
  margin: 8px;
  padding: 0 16px;
  min-width: 300px;
  min-height: 300px;
`;

export const VersionsContainer: React.FC = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [versions, setVersions] = useState<string[]>([]);
  const [currentFormVersion, setCurrentFormVersion] = useState<string>();

  return (
    <VersionsContainerRoot>
      <VersionsContainerSection
        title={'Versions'}
        versions={versions}
        toolBar={{ activeButton, setActiveButton }}
        handleAddVersion={() => {
          // @todo:
          // check the versions array for existing
          // value,
          // else
          // add
          if (versions && currentFormVersion) {
            setVersions([...versions, currentFormVersion]);
          }
        }}
      ></VersionsContainerSection>
      {activeButton ? (
        <VersionsContainerInput
          onSelectVersion={(versionValue: any) => {
            setCurrentFormVersion(versionValue.maxVersion);
          }}
        />
      ) : (
        ''
      )}
    </VersionsContainerRoot>
  );
};
export default VersionsContainer;
