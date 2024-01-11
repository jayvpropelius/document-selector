import { Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlineInput from "../../shared/Input/OutlineInput";
import Select from "../../shared/Select";
import { JOB_TEMPLATE_LIST } from "../constant";
import AccordionUsage from "./Accordian";

const JOB_TEMPLATE_OPTION = [
  {
    value: "Drug Policies",
    label: "Drug Policies",
  },
  {
    value: "Employee Handbooks",
    label: "Employee Handbooks",
  },
];

const AvailableDocument = () => {
  const [search, setSearch] = useState("");

  const handleUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 p-4 border border-gray rounded-lg bg-white">
      <Typography variant="body1">Available Documents</Typography>
      <OutlineInput
        type="text"
        icon="search"
        name="search"
        placeholder="Search"
        onChange={handleUpdateSearch}
        value={search}
      />
      <Typography variant="body1">Filter by:</Typography>

      <div className="flex gap-5">
        <div className="flex-1">
          <Select
            options={JOB_TEMPLATE_OPTION}
            placeholder="Job Templates"
            disabled={JOB_TEMPLATE_OPTION.length === 0}
          />
        </div>
        <div className="flex-1">
          <Select
            options={JOB_TEMPLATE_OPTION}
            placeholder="Locations"
            disabled={JOB_TEMPLATE_OPTION.length === 0}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <Select
            options={JOB_TEMPLATE_OPTION}
            placeholder="Subsidiary"
            disabled={JOB_TEMPLATE_OPTION.length === 0}
          />
        </div>
        <div className="flex-1">
          <Select
            options={JOB_TEMPLATE_OPTION}
            placeholder="Seniority"
            disabled={JOB_TEMPLATE_OPTION.length === 0}
          />
        </div>
      </div>

      <div className="flex justify-between items-center py-2 px-1.5">
        <div className="flex gap-1 justify-center">
          <Typography variant="body1">{JOB_TEMPLATE_LIST.length}</Typography>
          <Typography variant="body1">Available Documents</Typography>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <Switch size="medium" />
          <Typography variant="body1">Select All</Typography>
        </div>
      </div>

      <div>
        <AccordionUsage />
      </div>
    </div>
  );
};

export default AvailableDocument;
