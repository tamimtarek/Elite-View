import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../assets/banner2.jpg"
import image2 from "../../assets/banner3.jpg"
import image3 from "../../assets/image1.jpg"
import image4 from "../../assets/image7.jpg"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Cards from '../Cards/Cards';
import { Helmet } from 'react-helmet';

const Home = () => {
    const { cards } = useContext(AuthContext);
    return (
        <div className='lg:w-[1280px] border mx-auto'>
            <Helmet>
                <title>
                    Elite View | Home
                </title>
            </Helmet>
            <div >

                <div data-aos="zoom-in-down" className='relative border z-0 rounded-lg'>
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
                                <div className='space-y-8 lg:pt-16'>
                                    <h2 data-aos="fade-right" data-aos-duration="2000" className='lg:text-6xl md:text-3xl mt-4 lg:mt-20 font-bold'>Welcome To Elite View</h2>
                                    <p data-aos="fade-right" data-aos-duration="3000" className='md:text-lg lg:text-3xl lg:w-[50%]'>Experience the pinnacle of luxury with Elite View properties. Revel in exquisite design, breathtaking views, and unparalleled sophistication at every turn.</p>
                                </div>
                            </div>
                            <img className='rounded-lg' src={image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <div className='space-y-8 lg:pt-16'>
                                    <h2 className='lg:text-6xl md:text-3xl mt-4 lg:mt-20 font-bold'>Welcome To Elite View</h2>
                                    <p className='lg:text-3xl md:text-lg lg:w-[50%]'>Experience the pinnacle of luxury with Elite View properties. Revel in exquisite design, breathtaking views, and unparalleled sophistication at every turn.</p>
                                </div>
                            </div>
                            <img className='rounded-lg' src={image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <div className='space-y-8 lg:pt-16'>
                                    <h2 className='lg:text-6xl md:text-3xl mt-4 lg:mt-20 font-bold'>Welcome To Elite View</h2>
                                    <p className='md:text-lg lg:text-3xl lg:w-[50%]'>Experience the pinnacle of luxury with Elite View properties. Revel in exquisite design, breathtaking views, and unparalleled sophistication at every turn.</p>
                                </div>
                            </div>
                            <img className='rounded-lg' src={image3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='absolute w-full z-10 rounded-lg pl-14 bg-gradient-to-r from-purple-400 h-full text-white'>
                                <div className='space-y-8 lg:pt-16'>
                                    <h2 className='lg:text-6xl md:text-3xl mt-4 lg:mt-20 font-bold'>Welcome To Elite View</h2>
                                    <p className='md:text-lg lg:text-3xl lg:w-[50%]'>Experience the pinnacle of luxury with Elite View properties. Revel in exquisite design, breathtaking views, and unparalleled sophistication at every turn.</p>
                                </div>
                            </div>
                            <img className='rounded-lg' src={image4} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='text-center lg:w-[1200px] mx-auto mt-8 border'>
                    <h1 className='text-lg mb-6 md:text-2xl lg:text-4xl  font-semibold'>Find Your Comfort</h1>
                    <p>Add your dream property to the cart. Find your comfort with Elite View, where luxury meets <br /> tranquility in every exquisite detail.</p>
                    <div className='mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center'>
                        {
                            cards && cards.map(card => <Cards key={card.id} card={card} ></Cards>)
                        }
                    </div>
                </div>
                <div className='text-center mt-7 flex flex-col justify-center items-center'>
                    <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold'>Review</h3>
                    <p>Review your selections with Elite View. Ensure your luxury property<br /> choice aligns perfectly with your refined taste and lifestyle aspirations.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                        <div className="container border flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-600">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <span className='font-bold'>Elite View</span> conveys a sense of exclusivity, sophistication, and a premium experience. It suggests that visitors will have access to the finest properties with stunning views, luxurious amenities, and top-notch services.
                            </div>
                        </div>
                        <div className="flex flex-col border max-w-xl p-8 shadow-sm rounded-xl mt-7 lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex flex-col w-full">
                                <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
                                <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                    <div className="flex">
                                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-400">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-400">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <span className="dark:text-gray-600">3 out of 5</span>
                                </div>
                                <p className="text-sm dark:text-gray-600">861 global ratings</p>
                                <div className="flex flex-col mt-4">
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                            <div className="dark:bg-orange-500 h-4 w-5/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                            <div className="dark:bg-orange-500 h-4 w-4/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                            <div className="dark:bg-orange-500 h-4 w-3/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                            <div className="dark:bg-orange-500 h-4 w-2/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                            <div className="dark:bg-orange-500 h-4 w-1/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex border justify-center flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>
                                    <div className="flex space-x-3">
                                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-400">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Leave feedback</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">Maybe later</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;