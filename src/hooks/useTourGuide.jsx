import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourGuide = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: isTourGuide } = useQuery({
        queryKey: [user?.email, 'isTourGuide'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourguides/${user?.email}`);
            return res.data?.guide;
        }
    })

    return [isTourGuide];
};

export default useTourGuide;