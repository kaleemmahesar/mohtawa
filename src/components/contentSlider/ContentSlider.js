import React, {useState} from 'react'
import Container from '../container/Container'
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import slide1 from '../../assets/img/slide1.png'
import slide2 from '../../assets/img/slide2.png'
import slide3 from '../../assets/img/slide3.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



const ContentSlider = () => {

    const [carouselPaused, setCarouselPaused] = useState(false);

    const handleVideoClick = () => {
        setCarouselPaused(true);
        
    };

    return (
        <div className='content-slider'>
        <Container>
            <Row>
                <Col lg={12}>
                    <h2>Content <span>Collaborations</span></h2>
                </Col>
                <Col lg={12}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={2.65}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={!carouselPaused ? {
                            delay: 2500,
                            disableOnInteraction: false,
                        } : false}
                        breakpoints={{
                            100: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 1.5,
                            },
                            1200: {
                                slidesPerView: 2.65,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className='img-cover' onClick={handleVideoClick}>
                                <ReactPlayer
                                    url='https://www.youtube.com/shorts/RPttANcC6kE'
                                    width={'100%'}
                                    height={'100%'}
                                    controls={true}
                                    playing={false}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </div>
    );
};



export default ContentSlider

