import { Component } from "react";
import PropTypes from 'prop-types';
import Controls from './Controls/';
import { ListItem, PictureList, GalleryWrapper, Picture, ViewPort, InnerWrapper } from "./Gallery.styled";
import {ReactComponent as ImagePlaceholder} from '../../icons/image-placeholder.svg';

class Gallery extends Component {
    static defaultProps = {
        imageAlt: 'product example',
    };
    state = {
        currentPic: 0,
        totalPics: 0,
    };
    galleryType = {
        mini: 'mini',
        default: 'default',
    }
    componentDidMount() {
        const { imageList } = this.props;

        this.setState({
            totalPics: imageList.length - 1,
        });
    };
    shouldComponentUpdate(_, { currentPic, totalPics }) {
       return currentPic !== this.state.currentPic || totalPics !== this.state.totalPics;
    };
    renderImages = () => {
        const { imageList, imageAlt } = this.props;

        return imageList.map((url, idx) => (
            <ListItem
                {...this.props}
                key={idx}
                id={idx}
                isVisible={idx === this.state.currentPic}
            >
                {url
                    ? <Picture id={idx} src={url} alt={imageAlt} large />
                    : <ImagePlaceholder />
                }
            </ListItem>
        ));   
    };
    next = () => {
        this.setState(({currentPic}) => {
            const isLastPic = currentPic >= this.state.totalPics;

            return {
                currentPic: isLastPic ? 0 : currentPic += 1,
            }
        });
    };
    prev = () => {
        this.setState(({currentPic}) => {
            const isFirstPic = currentPic <= 0;

            return {
                currentPic: isFirstPic ? this.state.totalPics : currentPic -= 1,
            }
        });
    };
    onPicClick = (e) => {
        const IMG_KEY = 'IMG';
        const { id } = e.target;
        const isPicClicked = e.target.nodeName === IMG_KEY;

        if (!isPicClicked) return;

        this.setState({
            currentPic: id,
        });
    };
    renderViewPort = () => {
        const { currentPic } = this.state;
        const { imageList } = this.props;

        return (
            <ViewPort {...this.props}>
                <Picture 
                    src={imageList[currentPic]} 
                    {...this.props}
                />
            </ViewPort>
        );
    };
    renderControls = () => {
        const { totalPics } = this.state;
        return (
            totalPics > 1 
                    ?   <Controls
                            prev={this.prev}
                            next={this.next} 
                        />
                    : null
        );
    }
    render() {
        const { galleryType } = this.props;

        return (
            <GalleryWrapper {...this.props} >
                <InnerWrapper {...this.props} >
                    <PictureList 
                        onClick={ this.galleryType.default === galleryType ? this.onPicClick : () => {}}
                        {...this.props}
                    >
                            {this.renderImages()}
                    </PictureList>

                    { this.galleryType.mini === galleryType && this.renderControls() }
                    { this.galleryType.default === galleryType && this.renderViewPort() }
                </InnerWrapper>
            </GalleryWrapper>
    );
    };
};

Gallery.propTypes = {
    imageList: PropTypes.arrayOf(PropTypes.string.isRequired),
    imageAlt: PropTypes.string,
};

export default Gallery;