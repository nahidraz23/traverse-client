import useAuth from "../../../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className="card shadow-xl max-w-md mx-auto my-auto">
            <div className="my-10">
                <h1 className="text-center text-3xl">user profile</h1>
            </div>
            <div className="avatar justify-center">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
            <div className="card-body max-w-md mx-auto">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody className="text-2xl">
                                    {/* row 1 */}
                                    <tr className="bg-base-200">
                                        <td>Name:</td>
                                        <td className="text-center">{user?.displayName}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="bg-base-200">
                                        <td>Age:</td>
                                        <td className="text-center">{user?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>            
        </div>
    );
};

export default UserProfile;