import React from 'react';
import styled from 'styled-components';

const VersionsContainerSectionButtonsContainer = styled.div`
  margin: 8px 0;
  margin-right: 0;
`;

const VersionsContainerAddButton = styled.button`
  color: blue;
  background: transparent;
  border-radius: 5px;
  border-color: #d3d3d3;
  margin: 8px;
  padding: 8px;
  margin-right: 1px;
  cursor: pointer;
  position: relative;
`;

const VersionsContainerCancelButton = styled.button`
  background: transparent;
  border-radius: 8px;
  border-color: #d3d3d3;
  padding: 8px;
  margin-left: 4px;
  position: relative;
  cursor: pointer;
`;

const VersionsContainerToolbar: React.FC<any> = (props: any) => {
  return (
    <VersionsContainerSectionButtonsContainer>
      {props.activeButton ? (
        <>
          <VersionsContainerAddButton onClick={() => props.handleAddVersion()}>
            ADD
          </VersionsContainerAddButton>
          <VersionsContainerCancelButton
            onClick={() => props.setActiveButton(false)}
          >
            CANCEL
          </VersionsContainerCancelButton>
        </>
      ) : (
        <VersionsContainerAddButton onClick={() => props.setActiveButton(true)}>
          ADD VERSION
        </VersionsContainerAddButton>
      )}
    </VersionsContainerSectionButtonsContainer>
  );
};

export default VersionsContainerToolbar;
