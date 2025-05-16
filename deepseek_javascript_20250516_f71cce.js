// Ejemplo básico en React Native para mostrar anuncios
import { View, Button } from 'react-native';
import AdComponent from './AdComponent';

function App() {
  return (
    <View>
      <AdComponent adUnitID="TU_ID_DE_ANUNCIO" />
      {/* Contenido de tu app */}
    </View>
  );
}