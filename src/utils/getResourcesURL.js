import connectToAPI from "./connectToAPI.js";

const getResourcesURL = async (resource) => {
    const list = await connectToAPI(`https://www.swapi.tech/api/${resource}`);
    console.log(list);
    const { total_records } = list;
    const recordsIds = Array.from({ length: Number(total_records) }, (_, i) => {
        return "https://www.swapi.tech/api/people" + (i + 1);
    });
    console.log(recordsIds);
    return recordsIds
}

await getResourcesURL("people");