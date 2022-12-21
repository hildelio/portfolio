import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

class Cards extends Component {
  render() {
    const { title, image, description, githubLink, projectLink } = this.props.info;
    return (
      <Card className="App-projectsCard" sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="images" height="200" image={ image } />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <GitHubIcon size="small" href={ githubLink } target="_blank" />
          {
            projectLink &&  <OpenInNewIcon size="small" href={ projectLink } target="_blank" aria_label='deploy'/>
          }
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
