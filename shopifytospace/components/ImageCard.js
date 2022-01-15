import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ImageCard = ({ title, description, date, src }) => {
  const [isClick, setClick] = useState(false);
  return (
    <Card sx={{ maxWidth: 345, mt: 5 }}>
      <CardMedia component="img" height="200" image={src} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
