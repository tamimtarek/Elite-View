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
        <div className='lg:w-[1280px] lg:h-[480px] mx-auto'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay
            >
                <SwiperSlide>
                    <div className='h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../../assets/banner2.jpg')"}}>
                        <div className='absolute top-[25%] left-[3rem]  '>
                            <h3 className='text-4xl font-bold text-yellow-400'>Welcome To Elite View</h3>
                            <p className='lg:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate dignissimos eveniet voluptates porro? Ducimus a expedita nam perspiciatis reprehenderit,</p>
                        </div>
                        <img className='bg-gradient-to-r from-blue-500 to-transparent' src={image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={image2} alt="" />
                        <div className='absolute z-10 top-[25%] left-[3rem]'>
                            <h3>Welcome To Elite View</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute top-[25%] left-[3rem]'>
                            <h3>Welcome To Elite View</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur aperiam doloribus eligendi saepe. Ad quisquam laborum aliquam reiciendis, dolor quae tenetur ullam quaerat, voluptatem repudiandae blanditiis cumque. Iure, in suscipit.</p>
                        </div>
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute top-[25%] left-[3rem]'>
                            <h3>Welcome To Elite View</h3>
                        </div>
                        <img src={image4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;