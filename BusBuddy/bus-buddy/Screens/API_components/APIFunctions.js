
const api_root = "https://carris.tecmic.com";

//FIXME: here we can stop passing the props to each of the functions because 
//       these can be fetched from the element itself


//FIXME: we aren't yet filtering on bus stop functions by wether they are visible to public or not

//get all the bus stops that exist
export const getAllBusStops = async (element) => {

    fetch(api_root + "/api/v2.5/busstops", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {
        element.setState({
            loading: false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}


//get the three nearest bus stops to a certain location coords
export const getNearestBusStops = async (element, lat, lon) => {

    fetch(api_root + "/api/v2.5/busstops/near/lat/38.7363079/lon/-9.1365175", {method: 'GET'})
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

    fetch(api_root + "/api/v2.5/Routes/" + route_no, {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter responseJson so that only bus stops are displayed
        //routes can be circular.. or linear with up or down direction
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

        //update element state
        element.setState({
            loading: false,
            dataSource: response
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}



//sort routes array (alphabetic by route_name or numerical by bus_no (default)) 
const sortRoutes = (routes_array, sortBy) => {

    if(sortBy == 'route_name'){
        routes_array.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    else{
        routes_array.sort(function(a, b) {
            var numA = a.routeNumber;
            var numB = b.routeNumber;
            return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
        });
    }
    return routes_array;
}


//get all routes that exist/are active
export const getAllRoutes = async(element) => {

    fetch(api_root + "/api/v2.5/Routes", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter to not show routes that aren't currently active
        responseJson = responseJson.filter(route => route.isPublicVisible == true);

        //sort
        var sort_by = element.props.sort_by;
        if(sort_by != undefined){
            responseJson = sortRoutes(responseJson, sort_by);
        }

        element.setState({
            loading: false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}


//get all routes that pass by a certain bus Stop 
export const getStopRoutes = async(element) => {

    var bus_stop_id = element.props.bus_stop_id;

    fetch(api_root + "/api/v2.5/Routes/busStop/" + bus_stop_id, {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter to not show routes that aren't currently active
        responseJson = responseJson.filter(route => route.isPublicVisible == true);

        //sort
        var sort_by = element.props.sort_by;
        if(sort_by != undefined){
            responseJson = sortRoutes(responseJson, sort_by);
        }
        
        element.setState({
            loading: false,
            dataSource: responseJson
        })
        console.log(responseJson);
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}
