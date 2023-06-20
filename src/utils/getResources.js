import getResourcesUrl from "./getResourcesUrl.js"
import getResourcesFromUrl from "./getResourcesFromUrl.js"

const getResources = async (resource) => {
    const urls = await getResourcesUrl(resource);
    const resources = await getResourcesFromUrl(urls);

    const parsedResources = resources.map(res => {
        const id = res.result.uid;
        const properties = res.result.properties;
        const type = resource === "people" ? "characters" : resource;
        const name = properties.name || properties.model;
        return  {id, ...properties, type, name};
    });
return parsedResources;
}

export default getResources;

const people = await getResources("people");
console.log(people);

