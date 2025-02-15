import React from "react"
import DropdownFilter from "./dropdownFilter"

const all = { value: "all", label: "All" }

const SelectFilter = ({ isMulti = false, column, options = [] }) => {
  const { setFilterValue, getFilterValue } = column
  const filterValue = getFilterValue()

  const optionsWithExtraChoice = isMulti ? options : [all, ...options]
  const selectedValue = isMulti ? filterValue : optionsWithExtraChoice[0]

  return (
    <DropdownFilter
      value={filterValue ? filterValue : selectedValue}
      isMulti={isMulti}
      options={optionsWithExtraChoice}
      onChange={value => setFilterValue(value)}
    />
  )
}

export default SelectFilter
