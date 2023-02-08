const API_KEY = "your_bing_maps_api_key";
const ROUTE_URL = "https://dev.virtualearth.net/REST/v1/Routes/Truck";

function getTruckRoute(start, end) {
  let url = `${ROUTE_URL}?wp.0=${start}&wp.1=${end}&key=${API_KEY}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let route = data.resourceSets[0].resources[0];
      console.log(`Driving distance from ${start} to ${end}: ${route.travelDistance} miles`);
      console.log(`Travel time: ${route.travelDuration / 60} minutes`);
    })
    .catch(error => {
      console.error(`An error occurred while retrieving the truck route: ${error}`);
    });
}

getTruckRoute("Seattle, WA", "San Francisco, CA");
