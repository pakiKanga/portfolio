import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './../css/project.css'

const styles = theme => ({
  card: {
    maxWidth: 500,
    minWidth: 500,
    minHeight: 530,


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  icons: {
    fontSize: 24,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProjectCard extends React.Component {
  
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.image);
    return (
      <Card className={classes.card}>
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.name[0]}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.name}
          subheader={this.props.tech}
        />
        <CardMedia
          className={classes.media}
          image={require('./../images/'+ this.props.image + '.PNG')}
          title={this.props.name}
        />
        <CardContent>
          <Typography variant="h5"component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton className={classes.icons} aria-label="Github">
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        
        </CardActions>
       
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);