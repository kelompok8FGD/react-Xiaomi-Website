import React from 'react';
import Image from '../../Atoms/StoreImage/StoreImage';
import Price from '../../Atoms/StorePrice/StorePrice';
import Badge from '../../Atoms/StoreBadge/StoreBadge';

const ProductInfo = ({ title, badgeText, badgeColor, price, imageSrc }) => {
  return (
    <div className="w-full self-center px-4 lg:w-1/2">
      <h1 className="block font-bold text-primary text-2xl lg:text-4xl pb-5 ml-5">{title}</h1>
      <Badge text={badgeText} color={badgeColor} />
      <Price value={price} />
    </div>
  );
};

export default ProductInfo;