import fetch from "unfetch";

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllBuses= () =>
    fetch("/api/v1/bus")
        .then(checkStatus);

export const addBus = bus =>
    fetch("/api/v1/bus", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(bus)
    })
