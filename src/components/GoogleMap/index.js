import GoogleMapReact from "google-map-react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function MyGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });
  const [current, setCurrent] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setCurrent(location.coords);
    });
  }, []);

  const location = current
    ? { lat: current.latitude, lng: current.longitude }
    : center;

  const onLoad = useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(location);
      map.fitBounds(bounds);

      setMap(map);
    },
    [current]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        label="Ghous"
        onDrag={(e) => console.log(e.latLng.lat(), e.latLng.lng())}
        draggable={true}
        position={location}
        icon={{
          url: "https://lh5.googleusercontent.com/3NMMgDMHUVO4nfcVngYtQ9PVJLF0kKIB3sjGsA5mDsOrI-QI0Ks2wIQO9_WwE9A88czu8mSBWIJ3lZitS2p2k9OdYpgpwPYl1ow3T2xXGuLy8AJMip9qImlM27yb12RnOqlsd3y-",
          scaledSize: new window.google.maps.Size(100, 100),
        }}
      />
      <Marker position={{ lat: 24.93233608120905, lng: 67.08704397586912 }} />
      <Marker position={{ lat: 24.9313104, lng: 67.0806496 }} />
      {/* <DirectionsRenderer /> */}
      {/* <DirectionsService callback={(e) => console.log("direction", e)} /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}
