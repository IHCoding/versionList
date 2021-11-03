import React, { useState } from 'react';
import styled from 'styled-components';
import semverGt from 'semver/functions/gt';
import CloseIcon from '../../../custom-components/icons/close-icon';

const VersionsItemsRoot = styled.div`
  min-width: 100px;
  border-radius: 15px;
  background: #e2e2e2;
  color: white;
  text-align: center;
  padding: 10px 4px;
  font-size: 1.1em;
  display: inline-block;
  margin: 4px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  background: ${(props: any) => {
    return semverGt(props.text, '999.0.0')
      ? 'grey'
      : props.isDuplicate
      ? 'orange'
      : '#23395d ';
  }};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 25px 0 rgb(0 0 0 / 10%);
    margin: 4px;

    :first-child {
      margin-left: 8px;
    }
  }
`;

const VersionsContainerItemsWrapper = styled.div`
  margin: 2px;
`;

const VersionItemsText = styled.div`
  margin: 2px;
`;

const closeIconStyle = {
  root: `
  position: absolute;
  right: 8px;
  top: 2px;
  color: red;
  cursor:pointer;  
`,
};

const VersionsItems: React.FC<any> = (props: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <VersionsContainerItemsWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <VersionsItemsRoot {...props}>
        {hovered ? <CloseIcon styles={closeIconStyle} /> : ''}

        <VersionItemsText>{props.text}</VersionItemsText>
      </VersionsItemsRoot>
    </VersionsContainerItemsWrapper>
  );
};

export default VersionsItems;
