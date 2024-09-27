import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
    const {user} = useAuth();
    
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold p-5">Greetings, {user?.displayName}</h1>
            <h2 className="text-xl font-semibold">Welcome to your Dashbaord</h2>
        </div>
    );
};

export default DashboardHome;