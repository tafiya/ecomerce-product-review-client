import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryProducts from "./CategoryProducts";
import useProducts from "../../hooks/useProducts";


const Products = () => {
    const [products] =useProducts();
    console.log(products)
    const categories =['ALL','Natural Plant','Artificial Plant','Flower Plant','Plant Accessories'];
    
    const initialIndex =0;

    const [tabIndex,setTabIndex]=useState(initialIndex);
    
    
    console.log(tabIndex);
    const All=products;
    const Accessories =products.filter(item=>item.category === "Plant Accessories");
    const Natural=products.filter(item=>item.category === "Natural Plant");
    const Flower =products.filter(item=>item.category === "Flower Plant");
    const Artificial =products.filter(item=>item.category === "Artificial Plant");
   
    return (
        <div>
              <h1 className="text-5xl text-center font-bold mt-32 mb-8"> Your <span className=" text-[#b2dada]">dream </span> plants</h1>
              <p className=" text-xl text-center font-semibold mb-20 text-[#1E1E1E80] ">Easiest way to healthy life by buying your favorite plants </p>
          
              <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center font-semibold text-[#79bebe] ">
                <Tab >ALL</Tab>
                    <Tab>Natural</Tab>
                    <Tab>Flower</Tab>
                    <Tab>Artificial</Tab>
                    <Tab>Accessories</Tab>
                   
                    
                </TabList>
                <TabPanel>
                   <CategoryProducts items={All}></CategoryProducts>
                </TabPanel>
                <TabPanel>
                   <CategoryProducts items={Natural}></CategoryProducts>
                </TabPanel>
                <TabPanel>
                <CategoryProducts items={Flower}></CategoryProducts>
                </TabPanel>
                <TabPanel>
                <CategoryProducts items={Artificial}></CategoryProducts>
                </TabPanel>
                <TabPanel>
                <CategoryProducts items={Accessories}></CategoryProducts>
                
                </TabPanel>
            </Tabs>
            
             
            {/* <div className="max-w-[1248px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    products.map(product=><EachProduct key={product.id} product={product}></EachProduct>)
                }
            </div>
             */}
        </div>
    );
};

export default Products;