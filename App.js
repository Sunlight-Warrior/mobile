import { Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native';

import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <AssetExample />
      <Text style={styles.paragraph}>
        SIA - Sistema de Informações Acadêmicas
      </Text>
      <Text style={styles.paragraph2}>
      Terça, 2 de setembro de 2025
      </Text>
      <Button title = "Entrar com Email de estudante"/>
      
      <Text>
      -----------------------------OU---------------------------
      </Text>
      <Text>
      Matrícula
      </Text>
      <TextInput/>
      <Text style={{color: 'blue'}}
      onPress={() =>
      Linking.openURL('http://google.com')}> Não sei ou esqueci a matrícula
      </Text>
      <Text>
      Senha
      </Text>
      <TextInput/>
      <Text style={{color: 'blue'}}
      onPress={() =>
      Linking.openURL('http://google.com')}> Esqueci a senha/Cadastrar primeira senha
      </Text>
      <Button title ="Entrar"/>    

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
