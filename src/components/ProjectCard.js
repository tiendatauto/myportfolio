import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, urlPrj }) => {
  return (
    <Col size={12} sm={6} md={4} className="projectsize">
      <a style={{ color: 'white' }} href={urlPrj}>
        <div className="proj-imgbx" style={{ cursor: 'pointer' }}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
