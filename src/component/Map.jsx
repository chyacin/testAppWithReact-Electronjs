/* eslint-disable react/react-in-jsx-scope */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [49.1565474, 4.06];
const position1 = [49.1316524, 3.7735328];
const position2 = [49.092, 3.6423];
const position3 = [48.8947062, 4.0232481]

function Map() {
    return(
      <>
        <MapContainer style ={{ width: '100vw', height: '80vh'}} center={position} zoom={9} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>Champagne Barbelet Leroux</strong> <br />11 Rue Jobert, 51500 Chigny-les-Roses.<br />
              <strong>Horaires:</strong> lundi	10:00–12:00, 14:00–18:00 <br />
                        mardi	10:00–12:00, 14:00–18:00 <br />
                        mercredi	10:00–12:00, 14:00–18:00 <br />
                        jeudi 10:00–12:00, 14:00–18:00 <br />
                        vendredi	10:00–12:00, 14:00–18:00 <br />
                        samedi	10:00–12:00, 14:00–18:00 <br />
                        dimanche	10:00–12:00, 14:00–18:00 <br />
              <strong>Téléphone :</strong> 03 26 03 43 03
            </Popup>
          </Marker>
          <Marker position={position1}>
            <Popup>
              <strong>Champagne André Heucq</strong> <br />9 Rue Eugène Moussé, 51700 Cuisles.<br />
              <strong>Horaires:</strong> lundi : fermé <br />
                        mardi 09:30–12:00, 14:00–17:30 <br />
                        mercredi	09:30–12:00, 14:00–17:30 <br />
                        jeudi 09:30–12:00, 14:00–17:30 <br />
                        vendredi	09:30–12:00, 14:00–17:30 <br />
                        samedi	09:30–12:00, 14:00–17:30 <br />
                        dimanche	09:30–12:00 <br />
              <strong>Téléphone :</strong> 03 26 58 10 08
            </Popup>
          </Marker>
          <Marker position={position2}>
            <Popup>
              <strong>Champagne Franck Pascal</strong> <br />34 bis rue Valentine Regnier 51700 Baslieux Sous Châtillon.<br />
              <strong>Téléphone :</strong> 03 26 51 89 80
            </Popup>
          </Marker>
          <Marker position={position3}>
            <Popup>
              <strong>Domaine Larmandier-Bernier - Champagne</strong> <br />19, avenue du Général de Gaulle 51130 Vertus.<br />
              <strong>Téléphone :</strong> 03 26 52 13 24
            </Popup>
          </Marker>
        </MapContainer>
      </>
      )
      
}

export default Map;


