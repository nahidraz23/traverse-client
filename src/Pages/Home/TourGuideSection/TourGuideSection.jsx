import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TourGuideSection.css'
import YoutubeVideo from '../../../Components/Shared/YoutubeVideo';
import OurPackages from './OurPackages/OurPackages';
import MeetTourGuides from './MeetTourGuides/MeetTourGuides';
import SectionHeading from '../../../Components/Shared/SectionHeading';

const TourGuideSection = () => {
    const overviewYoutubeID = 'rn0nkEZdoRg';

    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <SectionHeading
                    heading={"Tourism and Travel Guide Section"}
                    subHeading={"Get valuable advice from seasoned travelers to make your trips smoother and more enjoyable. Learn about packing hacks, budgeting, and navigating new places like a pro."}
                ></SectionHeading>
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
                                <YoutubeVideo
                                    src={overviewYoutubeID}
                                ></YoutubeVideo>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        < OurPackages />
                    </TabPanel>
                    <TabPanel>
                        <MeetTourGuides></MeetTourGuides>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourGuideSection;