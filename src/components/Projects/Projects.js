import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/gymz.png";
import carental from "../../Assets/Projects/car.png";
import bizzup from "../../Assets/Projects/bizzup.png";
import Eventz from "../../Assets/Projects/event.lk.png";
import flyfish from "../../Assets/Projects/flying fish.png";
import Wres from "../../Assets/Projects/WN Resturants.png";
import Mres from "../../Assets/Projects/Resturant mobile.png";
import dreamz from "../../Assets/Projects/dreamz.png";
import Qr from "../../Assets/Projects/qr scanner.png";
import travel from "../../Assets/Projects/travel.png";
import treasurer from "../../Assets/Projects/treeasurer hunter.png";
import flight from "../../Assets/Projects/flight app.png";
import note from "../../Assets/Projects/noteapp.png";
import cal from "../../Assets/Projects/claculatror.png";






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bizzup}
              isBlog={false}
              title="BizzSup"
              description="Online Customer Support System for Business - web application for handling customer queries and support requests, improving response
efficiency by 30%."
              ghLink="https://github.com/ChaminduWn/BizzSup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eventz}
              isBlog={false}
              title="Event.lk"
              description="Online Event Management System - enabling event creation, user registration, and dynamic event
listings, improving user engagement"
              ghLink="https://github.com/ChaminduWn/Event.lk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="CJ Gym & Fitness"
              description="The gym management system for CJ gym offers a comprehensive solution using MERN stack. It manages members, schedules, staff, subscriptions, finances, inventory, supplements, and provides personalized coaching. This helps streamline gym operations, boost member engagement, and grow the business."
              ghLink="https://github.com/inupaUdara/gym-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flyfish}
              isBlog={false}
              title="The Flying Fish Game"
              description="The Flying Fish is a simple Android game where players control a fish to avoid obstacles and collect points. The game ends when the fish runs out of lives, and the player's score and highest score are displayed on the game over screen."
              ghLink="https://github.com/ChaminduWn/Android-Game-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note App"
              description="The Note App is a feature-rich application built using Kotlin and developed in Android Studio and using SharedPreferences. This app allows users to create, modify, and delete tasks, set reminders with alarms, and use a built-in focus timer to enhance productivity. It is fully compatible with Android devices."
              ghLink="https://github.com/ChaminduWn/Note-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carental}
              isBlog={false}
              title="Car Rental App"
              description="A Flutter-based mobile application for renting premium cars, integrated with Firebase Firestore for real-time data management. The app features a luxurious and responsive UI, structured with BLoC architecture, and supports cross-platform deployment on Android, iOS, and Web."
              ghLink="https://github.com/ChaminduWn/Car_Rental"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wres}
              isBlog={false}
              title="WN Restaurant - Restaurant Management System (MERN)"
              description="restaurant management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and styled with Tailwind CSS. This application provides a seamless experience for customers and management alike, supporting menu browsing, ordering, payments, and user management functionalities."
              ghLink="https://github.com/ChaminduWn/Resturant"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mres}
              isBlog={false}
              title="WN Restaurant - Restaurant Mobile App (React Native)"
              description="React Native application developed using Expo Go. This mobile app serves as the user-facing counterpart to the Restaurant Management Web App (https://github.com/ChaminduWn/Resturant) and is designed to work seamlessly with the same backend and database."
              ghLink="https://github.com/ChaminduWn/Restaurant-MobileApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamz}
              isBlog={false}
              title="FairyTalePlanner - Wedding Planning System (MERN)"
              description="A vibrant MERN-powered platform that transforms wedding planning into a magical, stress-free journey! 🎉 Built with MongoDB, Express.js, React, and Node.js, and styled with the sleek Tailwind CSS, Dreams is your one-stop network for all things weddings — from stunning venues to dreamy services like car rentals, bridal styling, and unique gifts. Whether you're a couple planning your big day or a vendor showcasing your services, Dreams makes every moment sparkle!"
              ghLink="https://github.com/ChaminduWn/FairyTalePlanner"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qr}
              isBlog={false}
              title="WN QR - QR Code Scanner (Flutter)"
              description="WN QR Scanner & Generator is a Flutter-based mobile application that allows users to scan and generate QR codes with ease. The app supports various types of QR codes, including text, URLs, and contact information. It also provides features like sharing QR codes, saving scanned contact information, and opening URLs directly from the app."
              ghLink="https://github.com/ChaminduWn/Qr-Scanner-Flutter"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Management Learning Platform (Spring Boot)"
              description="web application combining travel planning and learning features, enabling 500+ users to
organize trips and access educational content on a single platform"
              ghLink="https://github.com/ChaminduWn/Travel-Management-Learning-Platform"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treasurer}
              isBlog={false}
              title="Treasurer Hunter"
              description="A simple Python game using the Turtle graphics library where the player navigates through a maze to collect eggs and avoid enemies."
              ghLink="https://github.com/ChaminduWn/Hidden-Treasure-Game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Booking Website"
              description="A responsive travel booking website that allows users to search flights, book tickets, and learn about the booking process with a clean and intuitive user interface. Built using React.js and TailwindCSS."
              ghLink="https://github.com/ChaminduWn/Flight-App"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Calculator App"
              description="This Android application provides a simple calculator interface for performing basic arithmetic operations. It features a clean UI with buttons for numbers, operators, and parentheses, along with an input and output display area. The calculator supports addition, subtraction, multiplication, division, modulus, and decimal operations. Error handling ensures that invalid expressions are handled gracefully."
              ghLink="https://github.com/ChaminduWn/Android-Calculator-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
