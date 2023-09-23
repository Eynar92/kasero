import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import { Icon } from 'leaflet'

export default function KaceroMap() {
  return (
    <MapContainer className='h-full w-full' center={[-17.435567, -66.121747]} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-17.435567, -66.121747]} />
    </MapContainer>
  )
}
