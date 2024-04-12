import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../assets/banner2.jpg"
import image2 from "../../assets/banner3.jpg"
import image3 from "../../assets/image1.jpg"
import image4 from "../../assets/image7.jpg"
const Header = () => {
    return (
        <div className='lg:w-[1280px]  lg:h-[480px] mx-auto'>
            <div>

                <div className='relative z-0 rounded-lg'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={80}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <h2 className='lg:text-4xl mt-4 lg:mt-20 font-bold'>Welcome To Elite View</h2>
                            </div>
                            <img className='rounded-lg' src={image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <h2 className='lg:text-4xl mt-20 font-bold'>Welcome To Elite View</h2>
                            </div>
                            <img className='rounded-lg' src={image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <h2 className='text-4xl mt-20 font-bold'>Welcome To Elite View</h2>
                            </div>
                            <img className='rounded-lg' src={image3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <h2 className='text-4xl mt-20 font-bold'>Welcome To Elite View</h2>
                            </div>
                            <img className='rounded-lg' src={image4} alt="" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Header;