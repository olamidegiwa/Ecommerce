import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Vigil Abloh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio minus beatae blanditiis rerum necessitatibus dolorem amet recusandae culpa nulla",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/211128135909-01-virgil-abloh-file-070521.jpg?q=w_3000,h_1942,x_0,y_0,c_fill",
  },
  {
    id: 2,
    name: "Pharell Williams",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio minus beatae blanditiis rerum necessitatibus dolorem amet recusandae culpa nulla",
    img: "https://images.wsj.net/im-803649?width=1280&size=1",
  },
  {
    id: 3,
    name: "Big Wiz",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio minus beatae blanditiis rerum necessitatibus dolorem amet recusandae culpa nulla",
    img: "https://ntm.ng/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-25-at-11.49.08-AM.jpeg",
  },
  {
    id: 4,
    name: "Travis Scott",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio minus beatae blanditiis rerum necessitatibus dolorem amet recusandae culpa nulla",
    img: "https://i.pinimg.com/564x/a4/ea/9b/a4ea9b195b6004119f744d44292d4b74.jpg",
  },
  {
    id: 5,
    name: "Big Sean",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio minus beatae blanditiis rerum necessitatibus dolorem amet recusandae culpa nulla",
    img: "https://i.scdn.co/image/ab6761610000e5eb89dccc0a0b3d818c8d5fb711",
  },
];

const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container ">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            commodi minus hic cum quia? Recusandae!
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6 px-4 ">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 dark:bg-gray-800 bg-primary/10 relative py-8 px-6 rounded-xl shadow-lg"
                >
                  <div className="mb-4 ">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>

                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    {" "}
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
