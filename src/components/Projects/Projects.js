import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import gym from "../../Assets/Projects/gym.png";
import carental from "../../Assets/Projects/car.png";
import bizzup from "../../Assets/Projects/bizz.png";
import Eventz from "../../Assets/Projects/event.png";
import flyfish from "../../Assets/Projects/fly.png";
import Wres from "../../Assets/Projects/WN Resturants.png";
import Mres from "../../Assets/Projects/Resturant mobile.png";
import dreamz from "../../Assets/Projects/wed.png";
import Qr from "../../Assets/Projects/qr scanner.png";
import travel from "../../Assets/Projects/travel.png";
import treasurer from "../../Assets/Projects/treeasurer hunter.png";
import flight from "../../Assets/Projects/flight app.png";
import note from "../../Assets/Projects/noteapp.png";
import cal from "../../Assets/Projects/cal5.jpg";

function Projects() {
  // Project data in an array with tags (web / mobile)
  const projects = [
    {
      imgPath: bizzup,
      title: "BizzSup",
      description:
        "Online Customer Support System for Business - web application for handling customer queries.",
      ghLink: "https://github.com/ChaminduWn/BizzSup",
      type: "web",
    },
    {
      imgPath: Eventz,
      title: "Event.lk",
      description: "Online Event Management System with event creation and registration.",
      ghLink: "https://github.com/ChaminduWn/Event.lk",
      type: "web",
    },
    {
      imgPath: gym,
      title: "CJ Gym & Fitness",
      description: "Gym management system (MERN stack) for schedules, members, and finances.",
      ghLink: "https://github.com/inupaUdara/gym-management-system",
      type: "web",
    },
    {
      imgPath: flyfish,
      title: "The Flying Fish Game",
      description: "Android game where players control a fish to avoid obstacles and collect points.",
      ghLink: "https://github.com/ChaminduWn/Android-Game-App",
      type: "mobile",
    },
    {
      imgPath: note,
      title: "Note App",
      description: "Kotlin Android app for notes, reminders, and productivity tools.",
      ghLink: "https://github.com/ChaminduWn/Note-App",
      type: "mobile",
    },
    {
      imgPath: carental,
      title: "Car Rental App",
      description: "Flutter app for renting premium cars, Firebase integration, cross-platform.",
      ghLink: "https://github.com/ChaminduWn/Car_Rental",
      type: "mobile",
    },
    {
      imgPath: Wres,
      title: "WN Restaurant - Web App",
      description: "Restaurant Management System (MERN) with ordering, payments & user management.",
      ghLink: "https://github.com/ChaminduWn/Resturant",
      type: "web",
    },
    {
      imgPath: Mres,
      title: "WN Restaurant - Mobile App",
      description: "React Native app (Expo Go) connected to the Restaurant Management backend.",
      ghLink: "https://github.com/ChaminduWn/Restaurant-MobileApp",
      type: "mobile",
    },
    {
      imgPath: dreamz,
      title: "FairyTalePlanner - Wedding Planning System",
      description: "MERN-powered platform for wedding planning & vendor management.",
      ghLink: "https://github.com/ChaminduWn/FairyTalePlanner",
      type: "web",
    },
    {
      imgPath: Qr,
      title: "WN QR - QR Code Scanner",
      description: "Flutter app for scanning and generating QR codes.",
      ghLink: "https://github.com/ChaminduWn/Qr-Scanner-Flutter",
      type: "mobile",
    },
    {
      imgPath: travel,
      title: "Travel Management Learning Platform",
      description: "Spring Boot web app combining travel planning and learning features.",
      ghLink: "https://github.com/ChaminduWn/Travel-Management-Learning-Platform",
      type: "web",
    },
    {
      imgPath: treasurer,
      title: "Treasurer Hunter",
      description: "Python Turtle graphics game collecting treasures and avoiding enemies.",
      ghLink: "https://github.com/ChaminduWn/Hidden-Treasure-Game",
      type: "web",
    },
    {
      imgPath: flight,
      title: "Flight Booking Website",
      description: "React.js + TailwindCSS responsive travel booking web app.",
      ghLink: "https://github.com/ChaminduWn/Flight-App",
      type: "web",
    },
    {
      imgPath: cal,
      title: "Calculator App",
      description: "Android calculator with arithmetic operations & error handling.",
      ghLink: "https://github.com/ChaminduWn/Android-Calculator-App",
      type: "mobile",
    },
  ];

  // State for search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on — filter by type or search by name.
        </p>

        {/* 🔍 Search + Filter */}
        <div className="project-filters" style={{ position: "relative", zIndex: 10 }}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "relative", zIndex: 10 }}
          />
          <div className="filter-buttons" style={{ position: "relative", zIndex: 10 }}>
            <button
              className={filter === "all" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("all")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              All
            </button>
            <button
              className={filter === "web" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("web")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Web
            </button>
            <button
              className={filter === "mobile" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("mobile")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;