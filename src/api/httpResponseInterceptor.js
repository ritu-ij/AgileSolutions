export const checkHttpResponse = async (response) => {

    if (response instanceof Response) {
        if (response && response.status >= 200 && response.status < 400) {
            return response;
        }
        const error = new Error("API request failed.")
        const serverError = await response.json();
        error.message = serverError.message || "";

        throw error;
    } else {
        const error = new Error("Not a response object.");
        error.message = "Immature promise resolution."
        throw error;
    }
}