import React from 'react';
import styled from 'styled-components';

const VersionsItemsRoot = styled.div`
  width: 75px;
  border-radius: 15px;
  background: #454545;
  color: white;
  text-align: center;
  padding: 10px 4px;
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const VersionsItems: React.FC<any> = (props: any) => {
  return <VersionsItemsRoot>{props.text}</VersionsItemsRoot>;
};

export default VersionsItems;
