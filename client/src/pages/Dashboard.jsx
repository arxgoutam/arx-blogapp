
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sidebar from '../components/Sidebar';
const Dashboard = () => {
    return(
    <>
        <div className="dashboard-page">
            <div className="dashboard-container">
                <div className="side-bar">
                    <Sidebar/>
                </div>
                <div className="content">
                    content
                </div>
                
            </div>
        </div>
    </>
    );
};

export default Dashboard;