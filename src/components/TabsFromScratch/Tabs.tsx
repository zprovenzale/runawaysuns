import { useState } from 'react';
import './Tabs.css'
import FirstTab from '../TabsAll/FirstTab';
import SecondTab from '../TabsAll/SecondTab';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';



const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
        <h1>Many lovely Tabs Great</h1>
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>

            </ul>
            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <FirstTab/>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <SecondTab/>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <p> Tab 3 works!</p>
                </TabContent>
            </div>
        </div>

        </>
    );
};

export default Tabs