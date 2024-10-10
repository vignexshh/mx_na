import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface SelectDropdownProps {
  groups: {
    label: string;
    items: { value: string; label: string }[];
  }[];
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ groups }) => {
  if (!groups || groups.length === 0) {
    console.error("SelectDropdown: No groups provided");
    return null;
  }

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group, index) => (
          <SelectGroup key={index}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectDropdown;