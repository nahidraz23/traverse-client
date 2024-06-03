import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TourGuideSection.css'

const TourGuideSection = () => {

    return (
        <div className='container mx-auto'>
            <div className='mt-32 mb-10 text-center'>
                <h1 className='text-4xl'>Tourism and Travel Guide Section</h1>
                <p className='mt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
            </div>
            <div className='text-center' >
                <Tabs selectedTabClassName='react-tabs__tab--selected'>
                    <TabList className={'my-10'}>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet our tour guides</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourGuideSection;