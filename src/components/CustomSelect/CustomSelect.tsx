import React, { useEffect, useState } from 'react';
import { ICustomSelectOption } from '../../types/ICustomSelectOption.interface';
import { ICustomSelectProps } from '../../types/ICustomSelectProps.interface';
import styles from './CustomSelect.module.css';

export function CustomSelect(props: ICustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const optionsClassName = showOptions ? styles.customSelectOptionsShow : styles.customSelectOptions;
  const valueClassName = showOptions ? styles.customSelectValueSelected : styles.customSelectValue;
  
  const timeoutDuration = 500;

  useEffect(() => {
    if(searchTerm !== '') {
      const searchedOption = props.options.find(option => {
        return option.text.toLocaleLowerCase().startsWith(searchTerm);
      })

      if(searchedOption) {
        selectOption(searchedOption);
      }
    }

    const debounceTimeout = setTimeout(() => {
      setSearchTerm('');
    }, timeoutDuration);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  function selectOption(option: ICustomSelectOption) {
    setSelectedOption(option);
    setSelectedOptionIndex(props.options.indexOf(option));

    const selectedOptionElement = document.getElementById(`${props.id}-${option.value}`);
    selectedOptionElement?.scrollIntoView({block: 'nearest'});
  }

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  function closeOptions() {
    setShowOptions(false);
  }

  function handleElementClick() {
    toggleOptions();
  }

  function handleElementBlur() {
    closeOptions();
  }

  function handleElementKeyDown(event:React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "Enter":
        toggleOptions();
        break;
      case "Escape":
        closeOptions();
        break;
      case "ArrowUp":
        if (selectedOptionIndex === 0) {
          return;
        }

        selectOption(props.options[selectedOptionIndex - 1]);
        break;
      case "ArrowDown":
        if (selectedOptionIndex === props.options.length - 1) {
          return;
        }

        selectOption(props.options[selectedOptionIndex + 1]);
        break;
      default:
        setSearchTerm(`${searchTerm}${event.key}`);
        break;
    }
  }

  function handleOptionClick(option: ICustomSelectOption) {
    selectOption(option);
  }

  return (
    <div className={styles.customSelect}>
      <label className={styles.customSelectLabel}>
        {props.label}
      </label>
      <div
        className={styles.customSelectElement}
        tabIndex={0}
        onClick={handleElementClick}
        onBlur={handleElementBlur}
        onKeyDown={handleElementKeyDown}
      >
        <span className={valueClassName}>
          {selectedOption.text}
        </span>
        <ul id={props.id} className={optionsClassName}>
          {
            props.options.map(option => {
              const optionClassName = option === selectedOption ? styles.customSelectOptionSelected : styles.customSelectOption;
              const optionId = `${props.id}-${option.value}`;

              return (
                <li
                  key={optionId}
                  id={optionId}
                  className={optionClassName}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}