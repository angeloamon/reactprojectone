import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render() {
        const displayImage = this.props.onList.map((image) => {
            return <ImageCard key={image.id} image={image} />
        });
        return (
            <div className="image-list">{displayImage}</div>
        );
    }
}

export default ImageList;