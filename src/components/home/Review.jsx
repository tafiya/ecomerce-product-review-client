import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Review = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-lg mx-auto mb-24 px-4 sm:block hidden">
            <div className="my-20 text-center">
                <h1 className="text-3xl font-bold">
                    What customers say about <br /> GREEMIND?
                </h1>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {[...Array(4)].map((_, index) => (
                        <div key={index}>
                            <div className="bg-[#C1DCDC] text-black p-6 mx-2 rounded-xl">
                                <div className="mb-10">
                                    <p className="text-sm leading-7 my-3 font-medium text-center">
                                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://i.ibb.co/SfY5Nzs/member3.jpg"
                                            alt=""
                                            className="h-16 w-16 rounded-full"
                                        />
                                        <div>
                                            <h1 className="text-lg font-semibold">Nill Khan</h1>
                                            <p className="text-base">YouTuber</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        4.5
                                        <FaStar color="#FFD700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Review;
