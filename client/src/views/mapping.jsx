import React, { useEffect, useState } from "react";

import {
    GoogleMap,
    useLoadScript,
    useJsApiLoader,
    MarkerF,
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
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: `AIzaSyCynpdKuFatSNzyrTnNhq6PisrMZz1EngQ`,
        id: "google-map-script",
        libraries,
    });

    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        console.log(markers);
    });
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
                    setMarkers([
                        ...markers,
                        {
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                            time: new Date(),
                        },
                    ]);
                    console.log(event.latLng.lat(), `>>>>>ini latitude`);
                    console.log(event.latLng.lng(), `ini`);
                }}
            >
                {markers.length > 0 &&
                    markers?.map((marker) => {
                        return (
                            <MarkerF
                                key={marker.time.toISOString()}
                                position={{ lat: marker.lat, lng: marker.lng }}
                            />
                        );
                    })}
            </GoogleMap>
            {console.log(markers)}
        </div>
    );
}
