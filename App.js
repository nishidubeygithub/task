import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';
class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>Click to Close Model</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <View style={styles.innerContainer}>
          <Text>Click to Open Model</Text>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
        </View>
        </View>
    )
   }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'pink',
    justifyContent: 'center',
    padding:100
  },
  modalContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  innerContainer: {
    alignItems: 'center',
    
  },
});
export default ModalExample;