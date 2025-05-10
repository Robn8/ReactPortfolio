import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const windowImages = [
    '/pik1.png',
    '/bpic.png',
    './pica.png.png',
    './pik2.png',
    './game1.png',
    './pik0.png'
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
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
            <div className="flex justify-center gap-x-4 mt-10 mb-5">
                <a
                    href="https://github.com/Robn8"
                    target="_blank"
                    className="bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-600 transition"
                >
                    See My Work
                </a>
                <a
                    href="/Resume_R_Natale.pdf"  // Place your resume PDF in the `public/` folder
                    target="_blank"
                    className="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-green-600 transition"
                >
                    View Resume
                </a>
            </div>

        </main>
    )
}

export default Window;