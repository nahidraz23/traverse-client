import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePackage = () => {
    const axiosPublic = useAxiosPublic();

    const {data : tourPackage = [] } = useQuery({
        queryKey: ['tourPackage'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packageDetails')
            return res.data;
        }
    })

    return [tourPackage]
};

export default usePackage;