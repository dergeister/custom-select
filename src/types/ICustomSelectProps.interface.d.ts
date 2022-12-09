import { ICustomSelectOption } from "./ICustomSelectOption.interface";

/**
 * @property {string} id - Unique ID of the CustomSelect element
 * @property {string} label - The text that will be displayed on the Label element
 * @property {ICustomSelectOption[]} - The array of options that will be displayed
 */
export interface ICustomSelectProps {
  id: string;
  label: string;
  options: ICustomSelectOption[];
}