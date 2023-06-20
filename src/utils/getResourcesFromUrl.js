import connectToAPI from "./connectToAPI.js"

const getResourcesFromUrl = async (urls) => {
const apiCalls = await Promise.all(urls.map(url => connectToAPI(url)));
return apiCalls;
} 

export default getResourcesFromUrl;