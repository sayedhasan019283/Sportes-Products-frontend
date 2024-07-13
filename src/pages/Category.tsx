import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Category = () => {

    const [searchTerm, setSearchTerm] = useState('Bat');
    const navigate = useNavigate();
  
    const handleCategoryClick = (term : string) => {
      setSearchTerm(term);
      navigate('/product/all-product', { state: { searchTerm: term } });
    };
    console.log(searchTerm)
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button onClick={() => handleCategoryClick('Bat')}>Bat</button>
            <button onClick={() => handleCategoryClick('Ball')}>Ball</button>
            <button onClick={() => handleCategoryClick('Glove')}>Glove</button>
            <button onClick={() => handleCategoryClick('Bat')}>Bat</button>
            <button onClick={() => handleCategoryClick('Ball')}>Ball</button>
            <button onClick={() => handleCategoryClick('Glove')}>Glove</button>
        </div>
        </>
    );
};

export default Category;