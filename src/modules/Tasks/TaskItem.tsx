// import { useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ITask } from "../../types/types";

const TaskItem: React.FC<ITask> = (item) => {
  return (
    <Grid item>
      <Card sx={{ bgcolor: "#b3e5fc", px: 2 }}>
        <CardContent
          sx={{
            width: "220px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            pt: "24px",
          }}
        >
          <Box>
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
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TaskItem;
