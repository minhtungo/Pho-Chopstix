import React from 'react';
import { Container } from 'react-bootstrap';
import { SectionTitle } from '../SectionStyling';
import { galleryItems } from '../../data';
import styled from 'styled-components';
import { CollectionsOutlined } from '@material-ui/icons';
import ImageGallery from 'react-image-gallery';

const GalleryContainer = styled.section`
  background-image: linear-gradient(315deg, #000000 0%, #0d0d0d 74%);
  padding: 60px 5px 30px 5px;
`;

const StyledImageGallery = styled(ImageGallery)``;

const Gallery = () => {
  return (
    <GalleryContainer>
      <Container id='gallery' data-aos='fade-up'>
        <SectionTitle style={{ marginBottom: '32.8px' }}>
          <CollectionsOutlined /> Gallery
        </SectionTitle>
        <StyledImageGallery items={galleryItems} />
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;
