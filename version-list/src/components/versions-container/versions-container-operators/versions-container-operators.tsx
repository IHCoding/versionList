import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '../../../custom-components/icons/arrow-drop-down-icon';
import ArrowDropUpIcon from '../../../custom-components/icons/arrow-drop-up-icon';
import VersionsContainerInputField from '../versions-container-input-field';
import stylesCss from './versions-container-styles.module.css';

const VersionsContainerInputRoot = styled.div`
  border-radius: 5px;
  min-height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
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
  position: relative;
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
  display: inline;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  margin: 8px;
  margin-right: 12px;
`;

const DropdownOperatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
  justify-content: center;
  box-shadow: 0px 4px 17px rgb(0 0 0 / 35%);
  position: absolute;
  top: 87px;
  border-radius: 5px;
  background-color: white;
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
  font-size: 1em;
`;

const activeDropdown = {
  backgroundColor: '#000',
  color: '#fff',
};

const DropdownTriggerContainer = styled.div`
  border: 1px solid rgb(166 166 166);
  background: rgb(246 246 246);
  width: 100%;
  border-radius: 5px;
  height: 100%;
`;

interface IVersionForm {
  operator: string | null;
  minVersion: string | null;
  maxVersion: string | null;
}

const Operators = ['equal=', 'greather than', 'less than', 'between'];

const VersionsContainerOperators: React.FC = (props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const [form, setForm] = useState<IVersionForm>({
    operator: 'equal=',
    minVersion: null,
    maxVersion: null,
  });

  console.log('logging value', props);

  const handleDropdown = () => {
    console.log('triggered butto');
    setDropdown(!dropdown);
  };

  const handleOperatorclick = (value: string) => {
    setForm({
      ...form,
      operator: value,
    });
    console.log(dropdown);
    setDropdown(!dropdown);
  };

  return (
    <VersionsContainerInputRoot>
      <OperatorLabelAndIconsContainer onClick={() => handleDropdown()}>
        <DropdownTriggerContainer>
          <OperatorLabelsContainer>
            <OperatorLabel>Operator </OperatorLabel>
            <OperatorChosen>{form.operator}</OperatorChosen>
          </OperatorLabelsContainer>
          <IconContainer>
            {dropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconContainer>
        </DropdownTriggerContainer>
        {dropdown && (
          <DropdownOperatorsContainer>
            {Operators.map((item) => (
              <DropdownItemSpan
                key={item}
                onClick={() => handleOperatorclick(item)}
                style={item === form.operator ? activeDropdown : {}}
              >
                {item}
              </DropdownItemSpan>
            ))}
          </DropdownOperatorsContainer>
        )}
      </OperatorLabelAndIconsContainer>
      {form.operator && form.operator === 'between' && (
        <VersionsContainerInputField
          value={form.minVersion}
          setValue={(val: string) => setForm({ ...form, minVersion: val })}
        />
      )}
      <VersionsContainerInputField
        value={form.maxVersion}
        setValue={(val: string) => setForm({ ...form, maxVersion: val })}
      />
    </VersionsContainerInputRoot>
  );
};

export default VersionsContainerOperators;
