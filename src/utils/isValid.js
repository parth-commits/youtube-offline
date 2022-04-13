export default async function isValid(url) {
    try {
        const response = await fetch(`http://staging-ytm.parthpatel148.repl.co/verifyMP3?URL=${url}`);
        return response.status === 200;
    } catch (error) {
        console.warn(error)
        return false;
    }
}