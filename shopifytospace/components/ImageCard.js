import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";

const ImageCard = ({ title, description, date, src }) => {
  const [isClick, setClick] = useState(false);

  return (
    <Card sx={{ mt: 2 }}>
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
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={isClick ? "Unfavourite" : "Favourite"}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => setClick(!isClick)}
          >
            {isClick ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip disableFocusListener disableTouchListener title="Share">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
