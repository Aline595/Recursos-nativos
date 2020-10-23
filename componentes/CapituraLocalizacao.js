import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Cores from '../constantes/Cores';
import PreviewDoMapa from './PreviewDoMapa';

const CapituraLocalizacao = (props) => {

  const [estaCapturando, setEstaCapturando] = useState(false);
  const [localizacao, setLocalizacao] = useState();

  const verificarPermissoes = async () =>{
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted'){
      Alert.alert(
        //titulo
        "Sem permissão para uso do mecanismo de localização",
        //mensagem
        "É preciso liberar acesso ao mecanismo de localização",
        //botão
        [{text: "OK"}]
      );
      return false;
    }
    return true;
  }
  
  const capiturarLocalizacao = async () => {
    const temPermissao = verificarPermissoes();
    
    if(temPermissao){
      try {
        setEstaCapturando(true);
        const localização = await Location.getCurrentPositionAsync({timeout: 8000});
        setLocalizacao({
          lat: localizacao.coords.latitude,
          lng: localizacao.coords.longitude
        });
        console.log(localização);
      } catch (err) {
        Alert.alert(
          "Impossível obter localizaçaõ",
          "Tente novamente mais tarde ou escolha no mapa",
          [{text: "OK"}]
        );
      }
      setEstaCapturando(false);
    }
  }
  
  return(
    <View style={estilos.capturaLocalizacao}>
      <PreviewDoMapa style={estilos.previewDoMapa} localizacao={localizacao}>
        {
          estaCapturando ?
          <ActivityIndicator
            size="large"
            color={Cores.primary}
          ></ActivityIndicator>
          :
          <Text>Nenhuma Localização</Text>
        }
        
      </PreviewDoMapa>
      <Button
        title="Obter localização"
        color={Cores.primary}
        onPress={capiturarLocalizacao}
      ></Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  capituraLocalizacao:{
    marginBottom: 16
  },
  previewDoMapa:{
    marginBottom: 12,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CapituraLocalizacao;

//AIzaSyDW29pXMJ-do72BtDEXyR-8KQW8ey9wVes
//https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyDW29pXMJ-do72BtDEXyR-8KQW8ey9wVes