import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabsFromReactLibrary.css'
import FirstTab from '../TabsAll/FirstTab';
import SecondTab from '../TabsAll/SecondTab';
function TabsReactLibrary() {
    return (
        <>
        <h1>Tabs Made with the React Library</h1>
        <div className="TabsReactLibrary">
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanel>
                    <FirstTab />
                </TabPanel>
                <TabPanel>
                    <SecondTab />
                </TabPanel>
                <TabPanel>
                    <p>Tab 3 works!</p>
                </TabPanel>
            </Tabs>
        </div>
        </>
    )
}

export default TabsReactLibrary;