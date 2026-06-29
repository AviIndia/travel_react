import api from "./api";

export const destinationList = async () => {
    try {
        const res = await api.get("destination/list.php");
        return res.data;
    } catch (error) {
        console.error("Destination List Error:", error);
        throw error;
    }
};