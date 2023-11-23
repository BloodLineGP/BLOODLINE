import React from "react";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};

const center = {
    lat: -6.17511,
    lng: 106.865036,
};

export default function MappingHospital() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `AIzaSyCynpdKuFatSNzyrTnNhq6PisrMZz1EngQ`,
        libraries,
    });

    const [markers, setMarkers] = React.useState([]);
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h1>
                RS{" "}
                <span role="img" aria-label="hospital">
                    🏥
                </span>
            </h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                onClick={(event) => {
                    setMarkers((current) => [
                        ...current,
                        {
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                            time: new Date(),
                        },
                    ]);
                }}
            >
                {markers.map((marker) => {
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />;
                })}
            </GoogleMap>
        </div>
    );
}
