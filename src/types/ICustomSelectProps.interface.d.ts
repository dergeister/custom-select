import { ICustomSelectOption } from "./ICustomSelectOption.interface";

export interface ICustomSelectProps {
  id: string;
  label: string;
  options: ICustomSelectOption[];
  selectedValue?: string;
}