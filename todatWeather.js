const api_key = "7c9defd6021d7f3b69f4dcffdf60bc12";
const request = "http://api.weatherstack.com/current?access_key=" + api_key + "&query=Vancouver";

var today = {
    date_today: new Date(),

}

// Define a asynchronous http request method
const sendRequest = (method, url) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            resolve(xhr.response);
        }
        xhr.send();

    });
    return promise;
}

// Call http request method to get the current weather and add it to "today" object.
// In the end console.log() the "today" object
const getWeather= () => {
    sendRequest('GET',request).then(responseData => {
        data = responseData.current;
        today.weather = data;
    })
    console.log(today)
}