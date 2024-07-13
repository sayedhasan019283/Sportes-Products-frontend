import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
interface ProductCardProps {
    rating: number; // Rating value
  }
const Ratings: React.FC<ProductCardProps> = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= Math.round(rating)) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
          } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
          }
        }
        return stars;
      };
    
      return <div className="flex">{renderStars()}</div>;
    };

export default Ratings;