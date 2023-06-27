import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { ICategory } from "../../types/types";

const CategoryItem: React.FC<ICategory> = (item) => {
  return (
    <Grid item xs={12}>
      <Card sx={{ bgcolor: "#b3e5fc" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "12vw",
            flexWrap: "wrap",
            pt: "24px",
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{item.name}</Typography>
          <Typography>{item.id}</Typography>
          <Typography>
            {item.createdAt.slice(0, 10).split("-").reverse().join(".")}
          </Typography>
          <Button size="small">actions</Button>
          <Button size="small">more</Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CategoryItem;
