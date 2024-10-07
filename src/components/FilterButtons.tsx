import { Button, ButtonGroup } from "@chakra-ui/react";

type FilterButtonsProps = {
  currentFilter: "all" | "completed" | "incomplete";
  onChangeFilter: (filter: "all" | "completed" | "incomplete") => void;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onChangeFilter,
}) => {
  return (
    <ButtonGroup spacing={2}>
      <Button
        onClick={() => onChangeFilter("all")}
        className={`max-h-[40px] border-yellow-500 text-white border-2 ${
          currentFilter === "all" ? "bg-yellow-500" : "bg-black"
        }`}
      >
        All
      </Button>
      <Button
        onClick={() => onChangeFilter("completed")}
        className={`max-h-[40px] border-yellow-500 text-white border-2 ${
          currentFilter === "completed" ? "bg-yellow-500" : "bg-black"
        }`}
      >
        Completed
      </Button>
      <Button
        onClick={() => onChangeFilter("incomplete")}
        className={`max-h-[40px] border-yellow-500 text-white border-2 ${
          currentFilter === "incomplete" ? "bg-yellow-500" : "bg-black"
        }`}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtons;
