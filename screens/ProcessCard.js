import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProcessCard = ({imgSrc, label, status}) => {
  const statusImg = require('../assets/icons/camera.png');
  const imageScr = require('../assets/icons/camera.png');
  return (
    <View style={styles.processCard}>
      <Image source={imageScr} style={styles.profile} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.statusContainer}>
        <Image style={styles.statusImage} source={statusImg} />
        <Text style={styles.statusMessage}>{status}</Text>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  processCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    borderWidth: 3,
    borberColor: '#0000ff',
    width: '95%',
    margin: 12,
    borderRadius: 5,
  },
  profile: {
    width: 64,
    height: 64,
    margin: 12,
    flex: 1,
  },
  label: {
    fontSize: 18,
    flex: 3,
    textAlign: 'left',
    paddingTop: 12,
  },
  statusContainer: {
    alignItems: 'center',
    margin: 12,
    flex: 1,
  },
  statusImage: {
    width: 40,
    height: 40,
  },
});

export default ProcessCard;
