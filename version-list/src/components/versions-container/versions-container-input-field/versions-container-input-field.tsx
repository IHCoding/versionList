import React from 'react';
import styled from 'styled-components';
import {
  BTWNEAEB,
  BTWNIAEB,
  BTWNIAIB,
} from '../../../utils/global-values/operators-list-values/operators-list-values';

const InputFieldRoot = styled.div`
  min-height: 10px;
  min-width: 120px;
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

const BtwnSpan = styled.span`
  position: relative;
  top: 0;
  left: -5px;
  font-size: 2em;
  color: grey;
`;

const VersionsContainerInputField: React.FC<any> = (props: any) => {
  return (
    <InputFieldRoot placeholder="Version">
      {props.minOrMax === 'minVersion' &&
        (props.operator === BTWNIAIB || props.operator === BTWNIAEB) && (
          <BtwnSpan> [ </BtwnSpan>
        )}
      {props.minOrMax === 'minVersion' && props.operator === BTWNEAEB && (
        <BtwnSpan> ] </BtwnSpan>
      )}
      <InputField
        onChange={(e: any) => props.setValue(e.target.value)}
        type="text"
        placeholder="Version"
        value={props.value}
      ></InputField>
      {props.minOrMax === 'maxVersion' && props.operator === BTWNIAIB && (
        <BtwnSpan> ] </BtwnSpan>
      )}
      {props.minOrMax === 'maxVersion' &&
        (props.operator === BTWNEAEB || props.operator === BTWNIAEB) && (
          <BtwnSpan> [ </BtwnSpan>
        )}
    </InputFieldRoot>
  );
};

export default VersionsContainerInputField;
