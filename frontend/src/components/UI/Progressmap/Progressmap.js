import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import classes from "./Progressmap.module.css"

function Progressmap() {
  return (
    <div className={classes.map}>
      <h1 className={classes.progressmap}>CIPHER MAP</h1>
      <CalendarHeatmap
        startDate={new Date("2023-01-01")}
        endDate={new Date("2024-01-01")}
        showWeekdayLabels={true}
        values={[
          { date: "2023-01-01", count: 12 },
          { date: "2023-01-22", count: 122 },
          { date: "2023-01-30", count: 38 },
        ]}
      />
    </div>
  );
}

export default Progressmap;
