import { fetchApi } from "../axios";
import { feedbackData } from "../redux/feedbackSlice";

export const fetchFeedback = async (dispatch, feedback) => {
    const res = await fetchApi.post('/feedback', feedback);
    dispatch(feedbackData(res.data))
}