import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const windowImages = [
    '/pik0.png',
    '/pik1.png',
    '/pik2.png',
    './pica.png.png',
    './prog1.png.webp'
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
};

const Window = () => {
    return (
        <main>
            <div className="max-w-4xl mx-auto">
                <Slider {...sliderSettings}>
                    {windowImages.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Screenshot ${index +1}`} className="w-full rounded-xl shadow-lg object-cover object-top h-100 " />
                        </div>
                    ))}
                </Slider>

    
            </div>
            <div class="flex justify-center mt-10 mb-5">
                <a
                    href="https://sight-productions.com/"
                    target="blank"
                    className="bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-600 transition"
                >
                See My Work
                 </a>
            </div>
        </main>
    )
}

export default Window;