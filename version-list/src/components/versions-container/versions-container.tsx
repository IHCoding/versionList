import React, { useState } from 'react';
import styled from 'styled-components';
import { compareVersions } from '../../utils/cmd/compared-versions/compare-versions';
import compare from 'semver/functions/compare';

import { IVersionData } from '../../utils/data-types/versions-types';
import VersionsContainerInput from './versions-container-operators';
import VersionsContainerSection from './versions-container-section';
import { EQ } from '../../utils/global-values/operators-list-values/operators-list-values';

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
  const [versions, setVersions] = useState<IVersionData[]>([]);
  const [currentFormVersion, setCurrentFormVersion] = useState<IVersionData>({
    // @ts-ignore
    operator: EQ,
    minVersion: '',
    maxVersion: '',
  });

  const onAddVersion = () => {
    // check the versions array for existing
    // value,
    // else
    // add
    if (currentFormVersion) {
      const compared = compareVersions(versions, currentFormVersion)();
      if (compared) {
        if (
          !window.confirm(
            'This version already exists. Do you still want to add it?!'
          )
        ) {
          return;
        }
        const sortedVersions = [...versions, currentFormVersion].sort(
          (aVersion, bVersion) =>
            compare(aVersion.maxVersion, bVersion.maxVersion)
        );

        setVersions(sortedVersions);
      } else {
        const sortedVersions = [...versions, currentFormVersion].sort(
          (aVersion, bVersion) =>
            compare(aVersion.maxVersion, bVersion.maxVersion)
        );

        setVersions(sortedVersions);
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
          setCurrentFormVersion({
            // @ts-ignore
            operator: EQ,
            minVersion: '',
            maxVersion: '',
          });
        }}
      />
      {activeButton ? (
        <VersionsContainerInput
          currentForm={currentFormVersion}
          onSelectVersion={(versionValue: any) => {
            setCurrentFormVersion(versionValue);
          }}
        />
      ) : (
        ''
      )}
    </VersionsContainerRoot>
  );
};
export default VersionsContainer;
