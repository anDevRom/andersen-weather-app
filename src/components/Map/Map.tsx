import mapboxgl from 'mapbox-gl'
import React from 'react'
import ReactMapGL from 'react-map-gl'
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../store/rootReducer"
import 'mapbox-gl/dist/mapbox-gl.css'
import {changeViewport} from "../../store/location/locationActions";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXZyb20iLCJhIjoiY2treG82NGFpNTRiZjJwcXQ5Y3E5MDNhciJ9.SJYOvB1s69BxXCFfy_iQJQ'

const Map = () => {
    const dispatch = useDispatch()

    const longitude = useSelector((state: RootState) => state.location.geoData.mapViewport.longitude)
    const latitude = useSelector((state: RootState) => state.location.geoData.mapViewport.latitude)



    return (
        <ReactMapGL
                width={'100%'}
                height={'100%'}
                latitude={latitude}
                longitude={longitude}
                zoom={10}
                mapStyle='mapbox://styles/mapbox/streets-v11'

                onViewportChange={(viewport: any) => dispatch(changeViewport({
                    longitude: viewport.longitude,
                    latitude: viewport.latitude
                }))}
                mapboxApiAccessToken={mapboxgl.accessToken}
            />
    )
}

export default Map
