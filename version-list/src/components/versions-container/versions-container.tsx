import React, { useState } from 'react';
import styled from 'styled-components';
import VersionsContainerInput from './versions-container-operators';
import VersionsContainerSection from './versions-container-section';

const VersionsContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eff2f7;
  border-radius: 8px;
  margin: 1% 2%;
  padding: 0 16px;
  min-width: 350px;
  min-height: 450px;
`;

export const VersionsContainer: React.FC = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [versions, setVersions] = useState<string[]>([]);
  const [currentFormVersion, setCurrentFormVersion] = useState<string>();

  const onAddVersion = () => {
    // @todo:
    // check the versions array for existing
    // value,
    // else
    // add
    if (versions && currentFormVersion) {
      if (versions.includes(currentFormVersion)) {
        if (
          !window.confirm(
            'This version already exists. Do you still want to add it?!'
          )
        ) {
          return;
        }
        setVersions([...versions, currentFormVersion]);
      } else {
        setVersions([...versions, currentFormVersion]);
      }
    }
  };

  return (
    <VersionsContainerRoot>
      <VersionsContainerSection
        title={'Versions'}
        versions={versions}
        toolBar={{ activeButton, setActiveButton }}
        handleAddVersion={() => {
          onAddVersion();
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
