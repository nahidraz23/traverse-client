import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const axiosSecure =useAxiosSecure();

    const {data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    console.log(users)

    return (
        <div>
            <div>
                <h1 className="text-center">Manage Uses</h1>
            </div>
        </div>
    );
};

export default ManageUsers;