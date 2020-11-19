import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';


function ModalPage() {
  const [visible, setVisible] = useState(false)

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <Text>Modais</Text>
      <Button title="Mostrar Modal" onPress={() => { setVisible(true) }} />

      <Modal style={{
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center'
      }} isVisible={visible}>
        <View style={{ backgroundColor: '#fff', height: 100,  textAlign: 'center', width: 330 }}>
          <Text>Conteudo da Modal</Text>
          <Button title="Fechar Modal" onPress={() => { setVisible(false) }} />
        </View>

      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  }
})

export default ModalPage;