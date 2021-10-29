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

const VersionsContainerSectionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding: 4px;
  top: 8%;
  right: 5%;
`;

const VersionsContainerAddButton = styled.button`
  color: blue;
  background: transparent;
  border-radius: 5px;
  border-color: #d3d3d3;
  margin: 8px;
  padding: 8px;
  position: relative;
`;

const VersionsContainerCancelButton = styled.button`
  background: transparent;
  border-radius: 8px;
  border-color: #d3d3d3;
  margin: 8px;
  padding: 8px;
  position: relative;
`;

export const VersionsContainer: React.FC = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonClick = (value: string) => {
    setActiveButton(value === 'true' ? true : false);
    console.log('handlebutton cliked');
  };

  return (
    <VersionsContainerRoot>
      <VersionsContainerSection title={'Versions'}>
        <VersionsContainerSectionButtonsContainer>
          <VersionsContainerAddButton onClick={() => handleButtonClick('true')}>
            ADD
          </VersionsContainerAddButton>
          {activeButton ? (
            <VersionsContainerCancelButton
              onClick={() => handleButtonClick('false')}
            >
              CANCEL
            </VersionsContainerCancelButton>
          ) : (
            ''
          )}
        </VersionsContainerSectionButtonsContainer>
      </VersionsContainerSection>
      {activeButton ? <VersionsContainerInput /> : ''}
    </VersionsContainerRoot>
  );
};
export default VersionsContainer;
