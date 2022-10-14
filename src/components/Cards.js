import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

class Cards extends Component {
  render() {
    console.log(this.props.info.image);
    const { title, image, description, githubLink, projectLink } = this.props.info;
    return (
      <Card className="App-projectsCard" sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="images" height="200" image={ image } />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={ githubLink } target="_blank" >Github</Button>
          <Button size="small" href={ projectLink } target="_blank" >See Project</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Cards;

Card.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }),
};
