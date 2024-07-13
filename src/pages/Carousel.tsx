

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029430/image/premium_photo-1679690884144-1f43b8f3bf41_awcv1v.avif"
            className="w-full "
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029423/image/istockphoto-1474925989-1024x1024_pcyt0n.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029407/image/istockphoto-502301173-1024x1024_mhkoin.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029446/image/markus-spiske-BfphcCvhl6E-unsplash_txvpxd.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl  font-bold size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item5" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029423/image/istockphoto-1163970663-1024x1024_vk2m8y.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl  font-bold size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item6" className="carousel-item w-full relative">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1721029435/image/istockphoto-1646447254-1024x1024_t2hi4p.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl  font-bold size-36 text-red-500 ">10% off</span>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2 ">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </>
  );
};

export default Carousel;
