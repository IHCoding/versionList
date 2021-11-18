import React, { useState } from 'react';
import styled from 'styled-components';
import {
  compareVersions,
  markVersionsAsConflicted,
} from '../../utils/cmd/compared-versions/compare-versions';
import compare from 'semver/functions/compare';

import {
  IVersionData,
  IVersionForm,
} from '../../utils/data-types/versions-types';
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
  min-height: 350px;
  height: auto;
  box-sizing: border-box;
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

  const checkVersionIsAllNumbers = (
    version: IVersionData,
    minOrMax: 'minVersion' | 'maxVersion'
  ) => {
    return /^([0-9]|[1-9][0-9]*)\.([0-9]|[1-9][0-9]*)\.([0-9]|[1-9][0-9]*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/.test(
      version[minOrMax]
    );
  };

  const validateAndSave = (versionFormValue: IVersionForm) => {
    // validate each input field
    const newVersionObject = {
      ...versionFormValue,
      errors: {
        ...versionFormValue.errors,
        operatorError: null,

        minVersionError:
          versionFormValue.minVersion.length === 0
            ? null
            : checkVersionIsAllNumbers(versionFormValue, 'minVersion')
            ? null
            : 'Invalid minVersion. eg. format [num].[num].[num]',

        maxVersionError:
          versionFormValue.maxVersion.length === 0
            ? null
            : checkVersionIsAllNumbers(versionFormValue, 'maxVersion')
            ? null
            : 'Invalid maxVersion. eg. format [num].[num].[num]',
      },
    };
    setCurrentFormVersion(newVersionObject);
  };

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
        const sortedVersions = [...versions, { ...currentFormVersion }].sort(
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
        toolBar={{
          activeButton,
          setActiveButton,
          formErrors: currentFormVersion.errors,
        }}
        handleRemoveVersion={(index) => {
          if (!window.confirm('Do you want to remove this item?!')) {
            return false;
          } else {
            const copyVersions = [...versions];
            copyVersions.splice(index, 1);

            setVersions(copyVersions);
          }
        }}
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
          onSelectVersion={(versionFormValue: IVersionForm) => {
            validateAndSave(versionFormValue);
          }}
        />
      ) : (
        ''
      )}
    </VersionsContainerRoot>
  );
};
export default VersionsContainer;
