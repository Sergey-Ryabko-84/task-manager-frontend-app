// import { useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ITask } from "../../types/types";

const TaskItem: React.FC<ITask> = (item) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "#b3e5fc", px: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            pt: "24px",
          }}
        >
          <Typography sx={{ mb: 1 }}>{item.name}</Typography>
          <Typography>{`start date: ${item.dateStart
            .slice(0, 10)
            .split("-")
            .reverse()
            .join(".")}`}</Typography>
          <Typography>{`end date: ${item.dateEnd
            .slice(0, 10)
            .split("-")
            .reverse()
            .join(".")}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TaskItem;
