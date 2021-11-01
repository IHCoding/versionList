import React from 'react';
import styled from 'styled-components';

const VersionsItemsRoot = styled.div`
  min-width: 100px;
  border-radius: 15px;
  background: #e2e2e2;
  color: black;
  text-align: center;
  padding: 10px 4px;
  font-size: 1.1em;
  font-weight: normal;
  display: inline-block;
  cursor: pointer;
  margin: 8px 4px;

  background: ${(props: any) => (props.isDuplicate ? 'orange' : 'green')};
`;

const VersionsItems: React.FC<any> = (props: any) => {
  return <VersionsItemsRoot>{props.text}</VersionsItemsRoot>;
};

export default VersionsItems;
