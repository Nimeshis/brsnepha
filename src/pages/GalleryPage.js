import React from 'react';
import Layout from '../components/Layout';
import './GalleryPage.css';

const GalleryPage = () => {
  // Sample gallery images data
  const galleryImages = [
    {
      id: 1,
      src: 'https://nepha.org.np/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-20.53.56_56508cbc-350x350.jpg',
      alt: 'Gallery Image 1'
    },
    {
      id: 2,
      src: 'https://nepha.org.np/wp-content/uploads/2024/10/dashain_page-0001-350x350.jpg',
      alt: 'Gallery Image 2'
    },
    {
      id: 3,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g12-350x350.jpg',
      alt: 'Gallery Image 3'
    },
    {
      id: 4,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g9-350x350.jpg',
      alt: 'Gallery Image 4'
    },
    {
      id: 5,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g8-350x350.jpg',
      alt: 'Gallery Image 5'
    },
    {
      id: 6,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g7-350x350.jpg',
      alt: 'Gallery Image 6'
    },
    {
      id: 7,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g6-350x350.jpg',
      alt: 'Gallery Image 7'
    },
    {
      id: 8,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g1-350x350.jpg',
      alt: 'Gallery Image 8'
    },
    {
      id: 9,
      src: 'https://nepha.org.np/wp-content/uploads/2024/03/g5-350x350.jpg',
      alt: 'Gallery Image 9'
    }
  ];

  return (
    <Layout>
      <div className="gallery-page">
        <div className="container">
          <div className="page-header">
            <h1>Gallery</h1>
            <p>Browse through our photo gallery</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div className="gallery-item" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;