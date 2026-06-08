import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Configure pdfjs worker to use CDN matching the package version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pdf = process.env.PUBLIC_URL + "/chamindu_cv.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px", zIndex: 10 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", pointerEvents: "auto", cursor: "pointer" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Document Render Container */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative", zIndex: 5 }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="text-center text-white my-4">
                <div className="spinner-border text-light mb-2" role="status"></div>
                <p>Loading CV document...</p>
              </div>
            }
            error={
              <div className="text-center text-white my-4">
                <p>Could not load the PDF document. Please click "Download CV" to view.</p>
              </div>
            }
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages || 0), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                className="mb-4 shadow-lg rounded"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px", zIndex: 10 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", pointerEvents: "auto", cursor: "pointer" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
