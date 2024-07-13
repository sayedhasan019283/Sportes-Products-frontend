import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (term: string) => {
    // console.log('term',term)
    navigate("/product/all-product", { state: { searchTerm: term } });
  };
  AOS.init();
  return (
    <>
      <div
        data-aos="flip-down w-full"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10"
      >
        <button
          className=" ml-16"
          onClick={() => handleCategoryClick("Cricket")}
        >
          <img
            src="https://img.favpng.com/22/14/22/cricket-bat-icon-cricket-icon-sports-and-games-icon-BkshKRms.jpg"
            alt=""
            className="rounded-full w-[250px] h-[250px]"
          />
        </button>
        <button
          className=" ml-16"
          onClick={() => handleCategoryClick("Football")}
        >
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.XDJ-u_XcGK7s6CHibnLdywHaHa&pid=Api&P=0&h=220"
            alt=""
            className="rounded-full w-[250px] h-[250px]" // Adjust w-16 and h-16 as needed
          />
        </button>
        <button className=" ml-16" onClick={() => handleCategoryClick("Hoki")}>
          <img
            src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-hockey-icon-png-image_4164428.jpg"
            alt=""
            className="rounded-full w-[250px] h-[250px]" // Adjust w-16 and h-16 as needed
          />
        </button>
        <button
          className=" ml-16"
          onClick={() => handleCategoryClick("Badminton")}
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.mZ8-XtFFIsL3qTKWOe_2wwHaHw&pid=Api&P=0&h=220"
            alt=""
            className="rounded-full w-[250px] h-[250px]" // Adjust w-16 and h-16 as needed
          />
        </button>
        <button
          className=" ml-16"
          onClick={() => handleCategoryClick("Volleyball")}
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.ulF07WYtBvVwo0tBn-PY3QHaHv&pid=Api&P=0&h=220"
            alt=""
            className="rounded-full w-[250px] h-[250px]" // Adjust w-16 and h-16 as needed
          />
        </button>
        <button
          className=" ml-16"
          onClick={() => handleCategoryClick("Basketball")}
        >
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.KFLfQv0-V3nO76vL7WBgBwHaHa&pid=Api&P=0&h=220"
            alt=""
            className="rounded-full w-[250px] h-[250px]" // Adjust w-16 and h-16 as needed
          />
        </button>
      </div>
    </>
  );
};

export default Category;
