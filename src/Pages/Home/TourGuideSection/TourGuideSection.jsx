import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TourGuideSection.css'
import { useState } from 'react';

const TourGuideSection = () => {
    const [youtubeID] = useState('rn0nkEZdoRg')

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
                        <div className='flex justify-center'>
                            <div className="artboard artboard-horizontal phone-2">
                                <iframe className='video rounded-2xl'
                                    title='Youtube player'
                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
                                    width={"667px"}
                                    height={"375px"}
                                    >
                                </iframe>
                            </div>
                        </div>
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