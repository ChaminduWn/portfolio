import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt={`${props.title} preview`}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <div style={{ 
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 10
            }}
          >
            <BsGithub size={18} />
            <span style={{ marginLeft: "8px" }}>
              {props.isBlog ? "Blog" : "GitHub"}
            </span>
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 10
              }}
            >
              <CgWebsite size={18} />
              <span style={{ marginLeft: "8px" }}>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;