

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <span className="absolute top-0 right-0 text-4xl font-bold  size-36 text-red-500 ">10% off</span>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
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
      </div>
    </>
  );
};

export default Carousel;
