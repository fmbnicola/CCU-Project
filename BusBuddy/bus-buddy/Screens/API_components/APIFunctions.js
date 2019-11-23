
const api_root = "https://carris.tecmic.com";


/* ------------------ BUS STOPS ------------------ */

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


//get all the stops in a route 
export const getRouteBusStops = async (element) => {

    fetch(api_root + "/api/v2.5/Routes/" + element.props.route_no, {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter responseJson so that only bus stops are displayed
        //routes can be circular.. or linear with up or down direction
        var is_circ = responseJson.isCirc;
        if(is_circ){
            var itinerary = responseJson.variants[0].circItinerary.connections;
        }
        else{
            var itinerary = responseJson.variants[0].upItinerary.connections;
        }

        //get stops
        var stops = [] 
        for(stop of itinerary){
            stops.push(stop.busStop)
        }

        //get values of ini and fin properties
        var ini_id = element.props.initial_stop;
        var fin_id = element.props.final_stop;
        if(ini_id != fin_id && (fin_id == null || ini_id == null)){
            console.log("Error -> initial and final stop must be supplied");
            return null;
        }
        if(ini_id == fin_id && ini_id != null){
            console.log("Error -> initial stop is the same as final stop");
            return null;
        }

        //if ini or fin stops were given, get their index in list
        if(ini_id != null || fin_id != null){

            var ini_s = stops.findIndex(stop => stop.id == ini_id);
            var fin_s = stops.findIndex(stop => stop.id == fin_id);

            if(ini_s > fin_s){
                stops = stops.slice(fin_s, ini_s + 1);
                stops.reverse();
            }
            else{
                stops = stops.slice(ini_s, fin_s + 1);
            }
            
            //include final and last stops?
            var include = (element.props.include == null)? [1,1]: element.props.include;

            stops = (include[1] == 1)? stops: stops.slice(0,stops.length-1);
            stops = (include[0] == 1)? stops: stops.slice(1,stops.length+1);
        }

        //update element state
        element.setState({
            loading: false,
            dataSource: stops
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}







/* ------------------ ROUTES ------------------ */

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


//get directions (initial and final stop) for a route 
export const getRouteDirections = async(element, route_no) => {

    //request an await answer
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
            var itinerary = responseJson.variants[0].upItinerary.connections;
        }

        //get stops
        var stops = [] 
        for(stop of itinerary){
            stops.push(stop.busStop)
        }

        //extract important stops
        var initial_stop, final_stop;
        if(!is_circ){
            initial_stop = stops[0];
        }
        final_stop   = stops[stops.length-1]

        element.setState({
            loading: false,
            directions: {initial_stop: initial_stop, final_stop: final_stop}
        })
    })
    .catch(error=>console.log(error))
}


//check if there is a route with the given number
export const doesRouteExist = async(element) => {

    fetch(api_root + "/api/v2.5/Routes", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        //filter to not show routes that aren't currently active
        responseJson = responseJson.filter(route => route.isPublicVisible == true);

        //look for specific route
        var found = responseJson.find(route => route.routeNumber == element.state.numBus);

        //console.log(found);

        if(found == null){
            element.setState({
                loading: false,
                failure: true,
            })
        }
        else{
            element.setState({
                loading: false,
                nameBus: found.name
            })
        }
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}







/* ------------------ BUSES ------------------ */

//this function is used to convert string time stamp to js Date object
const getTimeLeft = (UNIX_timestamp) => {
    
    var estimationTime = Date.parse(UNIX_timestamp);

    var currentTime = new Date();
    var currentTime = currentTime.getTime();
    var difference  =  Math.abs(estimationTime - currentTime); 
    var minutes = parseInt((difference/(1000*60))%60);

    //we add 2 mins just to be on the safe side :)
    return Math.max(2, minutes + 2);
  }



export const getBusStopEstimation = async(element) => {

    //First request to see if service is active
    fetch(api_root + "/api/v2.5/Estimations", {method: 'GET'})
    .then( function(response) {

        //uncomment bottom line to simulate service being down
        //response.ok = false;

        if(response.ok != true || response.status != '200'){
            
            element.setState({
                loading: false,
                serviceDown: true
            })
            
            throw new Error('Estimation Service is down.');
        }
        //console.log(response);
        
    })
    .catch(error=>console.log(error)) //to catch the errors if any

    //Second request to get the buses
    var bus_stop_id = element.props.bus_stop_id;
    var num_results = element.props.num_results;
    num_results = (num_results == null)? '3' : num_results;

    fetch(api_root + "/api/v2.5/Estimations/busStop/" + bus_stop_id + "/top/" + num_results , {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {

        for(bus of responseJson){
            bus.timeLeft = getTimeLeft(bus.time);
        }
            
        element.setState({
            loading: false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
}



