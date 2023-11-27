
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import UseSearch from './UseSearch/UseSearch';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';



const Banner = () => {



    return (
        <div className='mb-20'>
            <AwesomeSlider animation="cubeAnimation" >

                <div className="bg-[url('https://i.ibb.co/7YwqNZ8/line-background-96-generated.jpg')] bg-cover w-full h-full">
                    <UseSearch></UseSearch>
                    <div className='w-[420px] md:w-[800px]   mx-auto mt-0 md:mt-10 lg:mt-40 space-y-1 md:space-y-6'>
                        <h1 className='text-center text-lg lg:text-4xl font-semibold text-purple-100 '>Where minds collide and thoughts intertwine, Thought Space beckons, inviting you to share, connect, and enlighten.</h1>
                        <p className='text-center text-sm lg:text-2xl font-semibold text-gray-400 '>Get Golden badge and make unlimited post by purchasing membership! </p>
                        <div className='w-32 mx-auto'>
                            <AwesomeButton
                                cssModule={AwesomeButtonStyles}
                                type="secondary"
                                className='px-5 '
                            >
                                Get Started
                            </AwesomeButton>
                        </div>
                    </div>
                </div>
                <div className="bg-purple-200 bg-cover w-full h-full  ">
                    <UseSearch></UseSearch>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1 md:mt-20 lg:mt-36 ">
                        <div className='space-y-0 md:space-y-7 ml-1 md:ml-32 col-span-2'>
                            <h1 className='text-start text-2xl lg:text-4xl font-semibold text-purple-900 '>In the vast expanse of ideas, Thought Space thrives, a sanctuary for your musings, a playground for discourse.</h1>
                            <div className='w-32 mx-auto'>
                                <AwesomeButton
                                    cssModule={AwesomeButtonStyles}
                                    type="secondary"
                                    className='px-5 '
                                >
                                    Get Started
                                </AwesomeButton>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <img className='w-full md:w-[500px]' src="https://i.ibb.co/y0tGbBq/1-removebg-preview.png" alt="" />

                        </div>
                    </div>
                </div>

            </AwesomeSlider>
        </div>
    );
};

export default Banner;