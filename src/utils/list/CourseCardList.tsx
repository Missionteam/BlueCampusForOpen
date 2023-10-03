import React from "react";
import { SvgIconProps } from "@mui/material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const InfoItem: React.FC<InfoItemProps> = ({ Icon, label, value }) => (
  <li>
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ marginBottom: "20px" }}
    >
      <span>
        <Icon style={{ fontSize: "16px" }} /> {label}
      </span>
      {value}
    </div>
  </li>
);

const CourseCardList: React.FC<InfoListProps> = ({ items }) => (
  <ul className="info ml-0" style={{ paddingLeft: "0" }}>
    {items.map((item, index) => (
      <InfoItem key={index} {...item} />
    ))}
  </ul>
);

export default CourseCardList;

export interface InfoItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  label: string;
  value: string;
}

interface InfoListProps {
  items: InfoItemProps[];
}
