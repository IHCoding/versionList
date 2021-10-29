import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputFieldRoot = styled.div`
  border-radius: 5px;
  min-height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 50px;
  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
`;

const VersionsContainerInputField: React.FC = () => {
  const [inputVal, setVal] = useState('');

  //   useEffect(() => {
  //     if (localStorage.getItem('versionArray')?.length) {
  //       let newArr = localStorage.getItem('versionArray')?.length
  //         ? localStorage.getItem('versionArray')
  //         : [];
  //       newArr.push(inputVal);
  //     } else {
  //       if (inputVal) {
  //         localStorage.setItem('versionArray', inputVal);
  //       }
  //     }
  //   }, [inputVal]);

  return (
    <InputFieldRoot>
      <input onChange={(e) => setVal(e.target.value)} type="number"></input>
    </InputFieldRoot>
  );
};

export default VersionsContainerInputField;
