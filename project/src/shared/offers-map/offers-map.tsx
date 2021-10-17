import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef
} from 'react';
import leaflet, { Map, LayerGroup, TileLayer } from 'leaflet';
import { Offer } from 'types/offers';
import 'leaflet/dist/leaflet.css';

const defaultPinIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39],
});

const activePinIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 39],
});

type OffersMapProps = {
  activeOffer?: Offer | null,
  zoomOnOffer?: boolean,
  offers: Offer[],
};

export default function OffersMap (props: OffersMapProps): JSX.Element {
  const { zoomOnOffer = true, activeOffer, offers } = props;

  const mapRef = useRef(null);

  const [mapInstance, setMapInstance] = useState<Map | null>(null);

  const pinsGroupRef = useRef<LayerGroup>(new leaflet.LayerGroup());

  const city = useMemo(() => offers[0].city, [offers]);

  const createMap = useCallback(() => {
    if (!mapRef.current || mapInstance) {
      return;
    }

    const { location: { latitude, longitude, zoom } } = city;

    const map = new Map(mapRef.current, {
      center: [latitude, longitude],
      zoom: zoom,
    });

    map.addLayer(new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ));
    setMapInstance(map);
  }, [city, mapRef, mapInstance]);

  const renderOffersPins = useCallback(() => {
    if (!mapInstance) {
      return;
    }

    const { location: { latitude, longitude, zoom } } = city;

    pinsGroupRef.current.clearLayers();

    mapInstance.flyTo([latitude, longitude], zoom);

    offers.forEach((offer) => {
      const pin = leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      });

      const isActive = activeOffer && offer.id === activeOffer.id;

      pin.setIcon(isActive ? activePinIcon : defaultPinIcon)
        .addTo(pinsGroupRef.current);

      isActive && zoomOnOffer && mapInstance.flyTo([offer.location.latitude, offer.location.longitude], offer.location.zoom);

      pinsGroupRef.current.addTo(mapInstance);
    });
  }, [zoomOnOffer, activeOffer, city, mapInstance, offers]);

  useEffect(createMap, [createMap]);

  useEffect(renderOffersPins, [renderOffersPins]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
}
