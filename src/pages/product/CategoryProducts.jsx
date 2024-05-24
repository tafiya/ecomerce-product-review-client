import { useEffect, useState } from "react";
import EachProduct from "./EachProduct";


const CategoryProducts = ({items}) => {
  

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        setProducts(items)
    },[items])
   
    const [sortOrderPrice, setSortOrderPrice] = useState('');
    const [sortOrderRating, setSortOrderRating] = useState('');
  
    // Function to handle sorting by price
    const handleSortByPrice = (order) => {
      const sortedProducts = [...products].sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      });
      setProducts(sortedProducts);
    };
  
    // Function to handle sorting by rating
    const handleSortByRating = (order) => {
      const sortedProducts = [...products].sort((a, b) => {
        return order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      });
      setProducts(sortedProducts);
    };
  
    // Handle change in sort order for price
    const handleSortOrderPriceChange = (e) => {
      const selectedOrder = e.target.value;
      setSortOrderPrice(selectedOrder);
      handleSortByPrice(selectedOrder);
    };
  
    // Handle change in sort order for rating
    const handleSortOrderRatingChange = (e) => {
      const selectedOrder = e.target.value;
      setSortOrderRating(selectedOrder);
      handleSortByRating(selectedOrder);
    };
    
    return (
        <div>
            <div className="text-center  flex gap-4  max-w-7xl mx-auto mb-5">
                <select className="select select-accent  max-w-xs" value={sortOrderPrice} onChange={handleSortOrderPriceChange}>
                    <option >Sort By Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
                <select className="select select-accent  max-w-xs" value={sortOrderRating} onChange={handleSortOrderRatingChange}>
                    <option >Sort By Rating</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

            </div>
              <div className="max-w-[1248px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-24">
                {
                    products.map(product=><EachProduct key={product._id} product={product}></EachProduct>)
                }
            </div>
            
            
        </div>
    );
};

export default CategoryProducts;