import React from 'react';
import styled from 'styled-components';
import semverGt from 'semver/functions/gt';

const VersionsItemsRoot = styled.div`
  min-width: 100px;
  border-radius: 15px;
  background: #e2e2e2;
  color: white;
  text-align: center;
  padding: 10px 4px;
  font-size: 1.1em;
  font-weight: normal;
  display: inline-block;
  cursor: pointer;
  margin: 8px 4px;

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
      : 'black';
  }};
`;

const VersionsItems: React.FC<any> = (props: any) => {
  return <VersionsItemsRoot {...props}>{props.text}</VersionsItemsRoot>;
};

export default VersionsItems;
