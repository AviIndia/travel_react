import api from "./api";

export const packageSearch = async (payload) => {
    try {
        const res = await api.get("packages/list.php", {
            params: payload
        });

        return res.data;

    } catch (error) {

        console.error("Package Search Error:", error);
        throw error;
    }
};

export const getPackages = async ()=>{
    try {
        const res = await api.get("packages/list.php")
        return res.data
    } catch (error) {
        console.log(error)
    }
}