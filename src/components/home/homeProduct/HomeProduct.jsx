import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import HomeCategory from "./HomeCategory";


const HomeProduct = ({products}) => {
    // const [products] =useProducts();
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
        <div className=" border bg-[#C1DCDC]">
        <h1 className="text-5xl text-center font-bold mt-12 mb-8"> Your <span className=" text-[#fcfcfc]">dream </span> plants</h1>
        <p className=" text-xl text-center font-semibold mb-20 text-[#1E1E1E80] ">Easiest way to healthy life by buying your favorite plants </p>
    
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center font-semibold text-[#fdfdfd] ">
          <Tab >ALL</Tab>
              <Tab>Natural</Tab>
              <Tab>Flower</Tab>
              <Tab>Artificial</Tab>
              <Tab>Accessories</Tab>
             
              
          </TabList>
          <TabPanel>
             <HomeCategory items={All}></HomeCategory>
          </TabPanel>
          <TabPanel>
             <HomeCategory items={Natural}></HomeCategory>
          </TabPanel>
          <TabPanel>
          <HomeCategory items={Flower}></HomeCategory>
          </TabPanel>
          <TabPanel>
          <HomeCategory items={Artificial}></HomeCategory>
          </TabPanel>
          <TabPanel>
          <HomeCategory items={Accessories}></HomeCategory>
          
          </TabPanel>
      </Tabs>
  </div>
    );
};

export default HomeProduct;