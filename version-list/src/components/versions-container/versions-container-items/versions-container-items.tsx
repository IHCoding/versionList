import React, { useState } from 'react';
import styled from 'styled-components';
import semverGt from 'semver/functions/gt';
import CloseIcon from '../../../custom-components/icons/close-icon';
import {
  BTWNEAEB,
  BTWNIAEB,
  BTWNIAIB,
  GTE,
  LTE,
} from '../../../utils/global-values/operators-list-values/operators-list-values';
const VersionsItemsRoot = styled.div`
  min-width: 100px;
  border-radius: 15px;
  background: #e2e2e2;
  color: white;
  text-align: center;
  padding: 10px 4px;
  font-size: 1.1em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 4px;
  width: auto;

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
    white-space: nowrap;

    :first-child {
      margin-left: 8px;
    }
  }
`;

const VersionsContainerItemsWrapper = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: column;
`;

const VersionItemsText = styled.div`
  margin: 2px;
`;

const closeIconStyle = {
  root: `
  position: relative;
  top: 2px;
  color: red;
  cursor:pointer;  
`,
};

const VersionsItems: React.FC<any> = (props: any) => {
  const [hovered, setHovered] = useState(false);

  const printVersionRangeAsSemVer = ({
    operator,
    minVersion,
    maxVersion,
  }: any) => {
    switch (operator) {
      case LTE:
        return `<=${maxVersion}`;
      case GTE:
        return `>=${maxVersion}`;
      case BTWNIAIB:
        return `[ ${minVersion} - ${maxVersion} ]`;
      case BTWNIAEB:
        return `[ ${minVersion} - ${maxVersion} [`;
      case BTWNEAEB:
        return `] ${minVersion} - ${maxVersion} [`;
      default:
        return maxVersion;
    }
  };

  const { minVersion, maxVersion, operator } = props.version;

  return (
    <VersionsContainerItemsWrapper>
      <VersionsItemsRoot
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
        text={maxVersion}
      >
        <VersionItemsText>
          {printVersionRangeAsSemVer({ minVersion, maxVersion, operator })}
        </VersionItemsText>
        {hovered ? (
          <div style={{ position: 'relative' }}>
            <CloseIcon styles={closeIconStyle} />
          </div>
        ) : (
          ''
        )}
        {/* <div style={{ position: 'relative' }}>
          {hovered ? <CloseIcon styles={closeIconStyle} /> : ''}
        </div> */}
      </VersionsItemsRoot>
    </VersionsContainerItemsWrapper>
  );
};

export default VersionsItems;
