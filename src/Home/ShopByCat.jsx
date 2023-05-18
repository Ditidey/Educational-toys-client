import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCat = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
    return (
        <div className='my-10 bg-slate-300 p-10 rounded-xl'>
            <p>Our popular </p>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Language Learning Toys</Tab>
                    <Tab>Coding and Robotics Toys</Tab>
                    <Tab>Mathematical Manipulatives</Tab>
                </TabList>

                <TabPanel>Hello from panel</TabPanel>
                <TabPanel>Hello from eng</TabPanel>
                <TabPanel>Hello from math</TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCat;