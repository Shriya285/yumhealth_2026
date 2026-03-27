import React from 'react';
import './Banner.css';
import reactBanner from '../assets/img/ExampleCarouselImage.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// export const Banner_1 = () => {
//   return (
//     <div className="Banner-container">
//       <div className="Banner_1" style={{ backgroundImage: `url(${reactBanner})` }}>
//         <Container className="d-flex flex-column align-items-center">
//           <Form className='d-flex justify-content-center w-100'>
//             <Form.Control
//               type="text"
//               placeholder="Search here"
//               className="me-2 custom-search-bar"
//             />
//             <Button variant="dark" className="ms-2 custom-button">Search</Button>
//           </Form>
//         </Container>
//       </div>
//     </div>
//   );
// };
export const Banner_1 = () => {
  return (
    <div className="Banner_1" style={{ backgroundImage: `url(${reactBanner})` }}>
      <div className="search-container">
        <Form.Control
          type="text"
          placeholder="Search here"
          className="custom-search-bar"
        />
        <Button variant="dark" className="custom-button">Search</Button>
      </div>
    </div>
  );
};
