
export default async function getMetaData(url) {
    try {
        const response = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`);
        const data = await response.text();
        const jsonData = JSON.parse(data);
        return [jsonData["title"], jsonData["author_name"], jsonData['thumbnail_url']];
    } catch (e) {
        console.log(e);
        return [false, false, false];
    }
}