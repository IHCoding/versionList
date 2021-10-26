import React from 'react';
import styled from 'styled-components';
import Button from '../../custom-components/button';
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

const VersionsContainerSectionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding: 4px;
  top: 8%;
  right: 5%;
`;

interface Props {
  onAdd?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const VersionsContainer: React.FC<Props> = ({ onAdd }: Props) => {
  return (
    <VersionsContainerRoot>
      <VersionsContainerSection title={'Versions'}>
        <VersionsContainerSectionButtonsContainer>
          <Button color={'primary'}>ADD</Button>
          <Button color={'default'}>Cancel</Button>
        </VersionsContainerSectionButtonsContainer>
      </VersionsContainerSection>
    </VersionsContainerRoot>
  );
};

export default VersionsContainer;
