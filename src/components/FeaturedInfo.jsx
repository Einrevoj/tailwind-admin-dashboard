import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured container flex justify-between">
      <div className="featuredItem flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer">
        <span className="featuredTitle text-xl">Revanue</span>
        <div className="featuredMoneyContainer flex items-center my-3 mx-0">
          <span className="featuredMoney text-3xl font-semibold">$2,415</span>
          <span className="featuredMoneyRate flex items-center mx-5">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer">
        <span className="featuredTitle text-xl">Sales</span>
        <div className="featuredMoneyContainer flex items-center my-3 mx-0">
          <span className="featuredMoney text-3xl font-semibold">$4,415</span>
          <span className="featuredMoneyRate flex items-center mx-5">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-7 rounded-lg cursor-pointer">
        <span className="featuredTitle text-xl">Cost</span>
        <div className="featuredMoneyContainer flex items-center my-3 mx-0">
          <span className="featuredMoney text-3xl font-semibold">$2,225</span>
          <span className="featuredMoneyRate flex items-center mx-5">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
