import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const IntelModal = ({closer}) => {
  const cancelIcon = require('../assets/icons/cancel.png');
  return (
    <ScrollView View style={styles.modalView}>
      <Text style={styles.intelTitle}>How it works</Text>
      <View style={styles.intelRow}>
        <Text style={styles.intelNumber}>1</Text>
        <Text style={styles.intelMessage}>
          Capture or upload one or multiple photos of leaves from the same plant
        </Text>
      </View>
      <View style={styles.intelRow}>
        <Text style={styles.intelNumber}>2</Text>
        <Text style={styles.intelMessage}>
          Select the plant type for more accuracy, or "unknown" if the plant is
          not known
        </Text>
      </View>
      <View style={styles.intelRow}>
        <Text style={styles.intelNumber}>3</Text>
        <Text style={styles.intelMessage}>
          Click on "submit" and wait for the result notification
        </Text>
      </View>
      <View style={styles.intelRow}>
        <Text style={styles.intelNumber}>4</Text>
        <Text style={styles.intelMessage}>
          Click on the result to get more details
        </Text>
      </View>
      <Pressable onPress={closer}>
        <Text style={styles.closeButton}>Close</Text>
      </Pressable>
    </ScrollView>
  );
};

const LaunchAlbums = () => {};

const HomeScreen = ({navigation}) => {
  const cameraIcon = require('../assets/icons/camera.png');
  const uploadIcon = require('../assets/icons/upload.png');
  const infoIconSrc = require('../assets/icons/info.png');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('Nothing');
  const options = {
    mediaType: 'photo',
    maxWidth: 200,
    maxHeight: 200,
    cameraType: 'back',
  };
  const launchCamera = () => {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Error occured: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const launchLibrary = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Error occured: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView style={styles.scroller}>
        <Modal
          animationType="slide"
          presentationStyle="formSheet"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <IntelModal closer={() => setModalVisible(!modalVisible)} />
          </View>
        </Modal>
        <View style={styles.infoContainer}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Image source={infoIconSrc} style={styles.infoIcon} />
          </Pressable>
        </View>
        <View style={styles.container}>
          <Text style={styles.homeTitle}>Upload a leaf image to test</Text>
          <Pressable onPress={() => launchCamera()} style={styles.choiceBox}>
            <Text style={styles.homeText}>Take Photo</Text>
            <Image source={cameraIcon} style={styles.homeIcons} />
          </Pressable>
          <Text style={styles.homeText}>{selectedImage}</Text>
          <Pressable onPress={() => launchLibrary()} style={styles.choiceBox}>
            <Text style={styles.homeText}>Upload from Gallery</Text>
            <Image source={uploadIcon} style={styles.homeIcons} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scroller: {
    flex: 1,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    flex: 1,
    width: '100%',
  },
  homeIcons: {
    width: 128,
    height: 128,
  },
  homeText: {
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 32,
  },
  choiceBox: {
    alignItems: 'center',
  },
  homeTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '100',
    marginBottom: 24,
  },
  infoIcon: {
    width: 24,
    height: 24,
    margin: 18,
  },
  centeredView: {
    elevation: 5,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    width: '90%',
    borderRadius: 18,
    flexDirection: 'column',
  },
  intelRow: {
    flexDirection: 'row',
    flexShrink: 1,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderColor: '#090909',
    borderRadius: 10,
    paddingBottom: 12,
    paddingTop: 18,
  },
  intelTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
    paddingTop: 24,
  },
  intelNumber: {
    fontSize: 42,
    marginLeft: 18,
    marginRight: 12,
    flexShrink: 1,
    textAlign: 'left',
  },
  intelMessage: {
    fontSize: 24,
    textAlign: 'left',
    flexShrink: 1,
  },
  closeButton: {
    fontSize: 32,
    textAlign: 'center',
    paddingTop: 24,
  },
  infoContainer: {
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
});

export default HomeScreen;
