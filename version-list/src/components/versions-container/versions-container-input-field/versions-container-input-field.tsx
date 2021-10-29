import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputFieldRoot = styled.div`
  min-height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  border: 1px solid rgb(166 166 166);
  background: rgb(246 246 246);
  width: 100%;
  border-radius: 5px;
  margin-left: 10px;
`;

const InputField = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  background: transparent;
  font-size: 16px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const VersionsContainerInputField: React.FC<any> = (props: any) => {
  return (
    <InputFieldRoot>
      <InputField
        onChange={(e: any) => props.setValue(e.target.value)}
        type="text"
        placeholder="Version"
        value={props.value}
      ></InputField>
    </InputFieldRoot>
  );
};

export default VersionsContainerInputField;
