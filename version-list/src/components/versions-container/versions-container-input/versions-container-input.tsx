import React, { useState } from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
import stylesCss from './versions-container-styles.module.css';

// const VersionsContainerInputRoot = styled`
// `;

// const OperatorAndLabelContainer = styled.div``;

// const OperatorAndLabelContainerLabel = styled.div``;

// const OperatorAndLabelContainerSelectedLabel = styled.div``;

// const OperatorAndLabelContainerIcon = styled.div``;

// const OperatorsContainer = styled.div``;

// const VersionsContainerInputInput = styled.input``;

const Operators = ['equal=', 'greather than', 'less than', 'between'];

const VersionsContainerInput: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [operator, setOperator] = useState<string>('equal=');
  const [clickOperator, setClickOperator] = useState<string>();

  const handleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const handleOperatorclick = (value: string) => {
    setOperator(value);
  };

  return (
    <div className={stylesCss.rootContainer}>
      <div className={stylesCss.containerLabel}>
        <div className={stylesCss.operatorLabelAndSign}>
          <div>operator</div>
          <div>{operator}</div>
        </div>
        <div className={stylesCss.dropdownIcon} onClick={handleDropdown}>
          Icon
        </div>
      </div>

      <div
        className={
          dropdown
            ? `${stylesCss.DropdownOptionsOnClick}`
            : stylesCss.DropdownOptions
        }
      >
        {Operators.map((item) => (
          <span
            key={item}
            className={stylesCss.span}
            onClick={() => handleOperatorclick(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VersionsContainerInput;
