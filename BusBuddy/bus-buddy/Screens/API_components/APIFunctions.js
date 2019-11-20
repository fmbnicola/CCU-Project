
const api_root = "https://carris.tecmic.com/";

export const getAllBusStops = async (element) => {

    fetch(api_root + "api/v2.5/busstops", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {
        element.setState({
            loading: false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}


export const getNearestBusStops = async (element, lat, lon) => {

    fetch(api_root + "api/v2.5/busstops/near/lat/38.7363079/lon/-9.1365175", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {
        element.setState({
            loading: false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}


export const getRouteBusStops = async (element, route_no, direction) => {

    fetch(api_root + "api/v2.5/Routes/" + route_no, {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter responseJson so that only bus stops are displayed
        var is_circ = responseJson.isCirc;
        
        if(is_circ){
            var itinerary = responseJson.variants[0].circItinerary.connections;
        }
        else{
            if(direction == 'up'){
                var itinerary = responseJson.variants[0].upItinerary.connections;
            }
            else{
                var itinerary = responseJson.variants[0].downItinerary.connections;
            }
        }

        //get stops        
        var response = [] 
        for(stop of itinerary){
            response.push(stop.busStop)
        }

        element.setState({
            loading: false,
            dataSource: response
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}