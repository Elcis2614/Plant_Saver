import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import ProcessCard from './ProcessCard';
const ProcessScreen = ({navigation}) => {
  const dumbIm = '../assets/icons/leaf.png';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.processCount}>1 running process</Text>
      <ProcessCard imgSrc={dumbIm} label={'image12344'} status="loading" />
    </SafeAreaView>
  );
};

export default ProcessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  processCount: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 18,
    fontWeight: '200',
  },
});
