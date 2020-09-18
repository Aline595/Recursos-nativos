import React, {useState} from 'react';
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
  const [novoLugar, setNovoLugar] = useState('');

  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }

  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}>Novo lugar</Text>
        <TextInput 
          style={estilos.textInput} 
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <Button
          title="Salvar Lugar"                    
          color={Cores.primary}
          onPress={() => {
            console.log(`Botão clicado: ${novoLugar}`)
            setNovoLugar('');
          }}                
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
    marginBottom: 12
  },
  textInput:{
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8
  }
});

export default NovoLugarTela;