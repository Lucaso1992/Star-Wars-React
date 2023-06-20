import getResourcesUrl from "./getResourcesUrl.js"
import getResourcesFromUrl from "./getResourcesFromUrl.js"

const getResources = async (resource) => {
    const urls = await getResourcesUrl(resource);
    const resources = await getResourcesFromUrl(urls);

    const parsedResources = resources.map(resource => {
        const id = resource.result.uid;
        const properties = resource.result.properties;
        return  {id, ...properties}
    })
return parsedResources;
}

export default getResources;

const people = await getResources("people");
console.log(people);

