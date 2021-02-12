import mapboxgl from 'mapbox-gl';
import React from 'react'
import ReactMapGL from 'react-map-gl'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {changeMapViewport} from "../../store/location/locationActions";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXZyb20iLCJhIjoiY2treG82NGFpNTRiZjJwcXQ5Y3E5MDNhciJ9.SJYOvB1s69BxXCFfy_iQJQ'
// "mapbox-gl": "^2.1.1"

const Map = () => {
    const dispatch = useDispatch()

    const longitude = useSelector((state: RootState) => state.location.geoData.coordinates.split(',')[1])
    const latitude = useSelector((state: RootState) => state.location.geoData.coordinates.split(',')[0])

    return (
        <ReactMapGL
                width={'100%'}
                height={'100%'}
                latitude={Number(latitude)}
                longitude={Number(longitude)}
                zoom={10}
                mapStyle='mapbox://styles/mapbox/streets-v11'

                onViewportChange={(viewport: any) => dispatch(changeMapViewport({longitude: viewport.longitude, latitude: viewport.latitude}))}
                mapboxApiAccessToken={mapboxgl.accessToken}
            />
    )
}

export default Map;
