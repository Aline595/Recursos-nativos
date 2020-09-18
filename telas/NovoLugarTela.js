import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Text
} from 'react-native';

import Cores from "../constantes/Cores";

const NovoLugarTela = (props) => {
  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}>Novo lugar</Text>
        <TextInput style={estilos.textInput} />
        <Button
          title="Salvar Lugar"                    
          color={Cores.primary}
          onPress={() => { }}                
        /> 
      </View>     
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  form: {
    margin: 30
  },
  titulo:{
    fontSize: 18,
    marginBottom: 15
  },
  textInput:{
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingVertical: 4
  }
});

export default NovoLugarTela;