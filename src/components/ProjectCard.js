import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./../css/project.css";

const activeColour = "#FAFAFA";
const inactiveColour = "#000";
const ProjectDiv = styled.div`
  display: inline-block;
  width: 390px;
  height: 300px;
  max-width: 390px;
  max-height: 300px;
  background-color: ${props => props.colour};
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

class ProjectCard extends React.Component {
  componentWillMount() {
    this.setState({ hover: true, colour: activeColour });
  }

  hoverOn = () => {
    this.setState({ hover: true, colour: activeColour });
  };

  hoverOff = () => {
    this.setState({ hover: false, colour: inactiveColour });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <ProjectDiv
        image={!this.state.hover ? require("./../images/" + this.props.image + ".PNG") : ''}
        colour={this.state.colour}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        {this.state.hover && (
          <div className="project-summary">
            <div className="project-title">{this.props.name}</div>
            <div className="project-description">{this.props.tech}</div>

            <button className="learnMore">learn more</button>
          </div>
        )}
        
      </ProjectDiv>
    );
  }
}

export default ProjectCard;
