import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Stack from "@mui/material/Stack";
import { Link, CardActionArea } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const LinkDescribe = styled(Link)({
  color: "#000000",
  "&:hover": {
    color: "#3CC6FE",
    // textDecoration: "underline #000000",
  },
});

export default function FreelanceCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActionArea href="/details" style={{ maxWidth: 345 }}>
      <Card style={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png"
          alt="Paella dish"
        />
        <CardHeader
          avatar={
            <Avatar
              src={`${process.env.REACT_APP_API_URL}image/profile/1.jpg`}
            />
            // <Avatar sx={{ bgcolor: red[500] }}>R</Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="Dina Villalobos"
          subheader="Top Rated Seller"
        />
        <CardContent style={{ paddingBottom: 12, paddingTop: 3 }}>
          <LinkDescribe href="/details" underline="none" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LinkDescribe>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 8,
            }}
          >
            <Box
              style={{ display: "flex", alignItems: "center", marginLeft: 8 }}
            >
              <Typography align="left" variant="body2" color="#FFBE5B">
                <StarIcon></StarIcon>
              </Typography>
            </Box>
            <Box
              style={{ display: "flex", alignItems: "center", marginLeft: 8 }}
            >
              <Typography align="left" variant="body2" color="#FFBE5B">
                5.0
              </Typography>
            </Box>
            <Box
              style={{ display: "flex", alignItems: "center", marginLeft: 8 }}
            >
              <Typography align="left" variant="body2" color="text.secondary">
                (297)
              </Typography>
            </Box>
          </Box>
          <div>
            <Divider />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Box>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Box>
              <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={0}
              >
                <Stack>
                  <Typography variant="body2" color="text.secondary">
                    STARTING AT
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="h5">150 ฿</Typography>
                </Stack>
              </Stack>
            </Box>
          </div>
        </CardContent>

        {/* <IconButton aria-label="rating">
          <StarIcon></StarIcon> <Typography variant="body2"> 5.0 </Typography>
        </IconButton> */}

        {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>About Rarisa:</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CardActionArea>
  );
}
