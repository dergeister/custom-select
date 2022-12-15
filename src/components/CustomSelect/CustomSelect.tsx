import React, { useState, useEffect } from 'react';
import { ICustomSelectOption } from '../../types/ICustomSelectOption.interface';
import { ICustomSelectProps } from '../../types/ICustomSelectProps.interface';
import styles from './CustomSelect.module.css';

export function CustomSelect(props: ICustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(props.options);

  const optionsClassName = showOptions ? styles.customSelectOptionsShow : styles.customSelectOptions;
  
  useEffect(() => {
    setFilteredOptions(props.options);
  }, [props.options]);

  function selectOption(option: ICustomSelectOption) {
    setSearchTerm('');
    setSelectedOption(option);
    setSelectedOptionIndex(props.options.indexOf(option));

    const selectedOptionElement = document.getElementById(`${props.id}-${option.value}`);
    selectedOptionElement?.scrollIntoView({block: 'nearest'});
  }

  function filterSearchTerm(searchTerm: string) {
    const searchedOptions = props.options.filter(option => {
      return option.text.toLocaleLowerCase().startsWith(searchTerm);
    })

    setFilteredOptions(searchedOptions)
    setSearchTerm(searchTerm);
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
    }
  }

  function handleOptionMouseDown(option: ICustomSelectOption) {
    selectOption(option);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    filterSearchTerm(newValue);
  }

  return (
    <div className={styles.customSelect}>
      <label className={styles.customSelectLabel}>
        {props.label}
      </label>
      <div
        className={styles.customSelectElement}
        onFocus={handleElementClick}
        onBlur={() => handleElementBlur()}
        onKeyDown={handleElementKeyDown}
      >
        <input
          className={styles.customSelectValue}
          placeholder={selectedOption.text}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className={styles.customSelectArrow} />
        <ul id={props.id} className={optionsClassName}>
          {
            filteredOptions.map(option => {
              const optionClassName = option === selectedOption ? styles.customSelectOptionSelected : styles.customSelectOption;
              const optionId = `${props.id}-${option.value}`;

              return (
                <li
                  key={optionId}
                  id={optionId}
                  className={optionClassName}
                  onMouseDown={() => handleOptionMouseDown(option)}
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