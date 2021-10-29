import React, { useState } from 'react';
import styled from 'styled-components';
import VersionsContainerInputField from '../versions-container-input-field';
import stylesCss from './versions-container-styles.module.css';

const VersionsContainerInputRoot = styled.div`
  border-radius: 5px;
  min-height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 40px;
  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
`;

const OperatorLabelAndIconsContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
`;

const OperatorLabelsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
`;

const OperatorLabel = styled.div`
  font-size: 16px;
  margin: 2px;
  padding: 4px;
`;

const OperatorChosen = styled.div`
  font-size: 16px;
  padding: 4px;
  margin: 2px;
`;

const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 8px;
  margin-right: 12px;
`;

const DropdownOperatorsContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: none;
`;

const DropdownItemSpan = styled.span`
  margin-bottom: 8px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  height: 30px;
  color: black;
  font-size: 14px;
`;

const activeDropdown = {
  backgroundColor: '#000',
  color: '#fff',
};

const Operators = ['equal=', 'greather than', 'less than', 'between'];

const VersionsContainerOperators: React.FC = (props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [operator, setOperator] = useState<string>('equal=');
  const [clickOperator, setClickOperator] = useState<string>();

  console.log('logging value', props);

  const handleDropdown = () => {
    console.log('triggered butto');
    setDropdown((prevState) => !prevState);
  };

  const handleOperatorclick = (value: string) => {
    setOperator(value);
    setDropdown(false);
  };

  return (
    <VersionsContainerInputRoot>
      <OperatorLabelAndIconsContainer onClick={handleDropdown}>
        <div
          style={{
            position: 'relative',
            border: 'solid 1px #ddd',
            background: '#ccc',
            width: '100%',
          }}
        >
          <OperatorLabelsContainer>
            <OperatorLabel>Operator </OperatorLabel>
            <OperatorChosen>{operator}</OperatorChosen>
          </OperatorLabelsContainer>
          <IconContainer>Icon</IconContainer>
        </div>
        {dropdown && (
          <div className={`${stylesCss.DropdownOptionsOnClick}`}>
            {Operators.map((item) =>
              item === operator ? (
                <DropdownItemSpan
                  key={item}
                  onClick={() => handleOperatorclick(item)}
                  style={activeDropdown}
                >
                  {item}
                </DropdownItemSpan>
              ) : (
                <DropdownItemSpan
                  key={item}
                  onClick={() => handleOperatorclick(item)}
                >
                  {item}
                </DropdownItemSpan>
              )
            )}
          </div>
        )}
      </OperatorLabelAndIconsContainer>

      <VersionsContainerInputField />
    </VersionsContainerInputRoot>
  );
};

export default VersionsContainerOperators;
