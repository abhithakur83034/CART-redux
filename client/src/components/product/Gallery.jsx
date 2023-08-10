import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import '../../App.css';

const Gallery = () => {
    const productData = useSelector((state) => state.productData);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(productData.data.payload);
    }, [productData]);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setData((prevData) => arrayMove(prevData, oldIndex, newIndex));
    };


  
    return (
        <>
           <Container>
              <Row>
                <Col>
                <h2 style={{textAlign:"center"}} > <i>Drag & Drop</i> </h2>
            <SortableImageGrid items={data} onSortEnd={onSortEnd} axis="xy" />
                </Col>
              </Row>
           </Container>
        </>
    );
};

const SortableImage = SortableElement(({ imageUrl }) => (
    <div className='image-item'>
        <img src={`http://localhost:4500/img/${imageUrl.image}`} height="130px" alt='' />
    </div>
));

const SortableImageGrid = SortableContainer(({ items }) => (
    <div className='image-grid mt-5'>
        {items.map((imageUrl, index) => (
            <SortableImage key={index} index={index} imageUrl={imageUrl} />
        ))}
    </div>
));

export default Gallery;
