import React from "react";
import styled from "styled-components";
import "./../css/project.css";
import "./../css/modal.css";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import Fade from "react-reveal/Fade";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const activeColour = "#FAFAFA";
const inactiveColour = "#000";
const ProjectDiv = styled.div`
  display: inline-block;
  width: 100vw;
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
    this.setState({ hover: false, colour: activeColour });
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

  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    let images;
    if (this.props.modalImages) {
      images = this.props.modalImages.map(image => {
        return { original: require("./../images/" + image) };
      });
    }
    return (
      <>
        <ProjectDiv
          image={
            !this.state.hover
              ? require("./../images/" + this.props.image + ".PNG")
              : ""
          }
          colour={this.state.colour}
          onMouseEnter={() => this.hoverOn()}
          onClick={() => this.hoverOn()}
          onMouseLeave={() => this.hoverOff()}
        >
          {this.state.hover && (
            <div className="project-summary">
              <Fade top>
                <div className="project-title">{this.props.name}</div>
                <div className="project-description">{this.props.tech}</div>
              </Fade>
              <Fade bottom>
                <button
                  onClick={() => this.setState({ modalOpen: true })}
                  className="learnMore"
                >
                  learn more
                </button>
              </Fade>
            </div>
          )}
        </ProjectDiv>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={500}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className="modalContainer">
          <button onClick={() => this.setState({ modalOpen: false })}>
            <img
              className="closeWindow"
              alt="close"
              src={require("./../images/close_icon.png")}
              style={{width: '50px', height: '50px'}}
            />
          </button>
            <div className="imageGallery">
              {images && (
                <ImageGallery
                  lazyLoad={true}
                  items={images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showThumbnails={false}
                />
              )}
            </div>
            <h1 className="modalHeader">{this.props.name}</h1>
            <h2 className="modalSummary">{this.props.description}</h2>
          </div>
        </Modal>
      </>
    );
  }
}

export default ProjectCard;
