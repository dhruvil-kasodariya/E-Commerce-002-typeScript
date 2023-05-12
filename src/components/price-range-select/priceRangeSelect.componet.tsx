import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { SingleValue } from "react-select";

import { priceRangeAction } from "../../store/categories/category.action";
import { PriceRange } from "../../store/categories/category.types";
import MySelect, { OptionType } from "../select/select.componet";

interface PriceOption {
  value: string;
  label: string;
  startValue: number;
  endValue: number;
}

type ExtendedOptionType = OptionType & PriceOption;

const priceOptions: ExtendedOptionType[] = [
  { value: "0-1k", label: "0-1k", startValue: 0, endValue: 1000 },
  { value: "1k-3k", label: "1k-3k", startValue: 1000, endValue: 3000 },
  { value: "3k-10k", label: "3k-10k", startValue: 3000, endValue: 10000 },
  { value: "10k-20k", label: "10k-20k", startValue: 10000, endValue: 20000 },
  { value: "20k+", label: "20k+", startValue: 20000, endValue: 100000 },
];

const PriceRangeSelect: FC = () => {
  const [selectedOption, setSelectedOption] = useState<PriceOption | null>(
    null
  );
  const dispatch = useDispatch();

  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option ? option : null);
  };

  useEffect(() => {
    if (selectedOption === null) {
      dispatch(
        priceRangeAction({
          value: "clear",
          label: "Clear",
          startValue: 0,
          endValue: 1000000,
        })
      );
    }
    selectedOption && dispatch(priceRangeAction(selectedOption));
  }, [selectedOption, dispatch]);

  return (
    <MySelect
      handleChange={handleChange}
      selectedOption={selectedOption}
      options={priceOptions}
      placeholder="Select Price range"
    />
  );
};
export default PriceRangeSelect;
