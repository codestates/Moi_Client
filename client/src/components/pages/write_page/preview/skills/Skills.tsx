import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: '25px',
  },
  title: {
    flexDirection: 'row',
    paddingBottom: '10px',
    borderBottomWidth: 0.3,
    borderBottomColor: '#2c2c2c',
    borderBottomStyle: 'solid',
    lineHeight: '160%',
    alignItems: 'stretch',
    marginBottom: '15px',
  },
  profile: {
    fontSize: 15,
    fontFamily: 'Nanum Gothic',
    lineHeight: '160%',
    color: '#343a40',
    textDecoration: 'none',
    marginBottom: '5px',
    textTransform: 'lowercase',
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'Nanum Gothic',
  },
  link: {
    fontFamily: 'Nanum Gothic',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Nanum Gothic',
  },
  skillList: { flexDirection: 'column' },
  list: { flexDirection: 'row', marginBottom: '5px' },
});
const Skills: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>기술</Text>
        </View>
        <View style={styles.skillList}>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.itemContent}>Java script</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.itemContent}>React js</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.itemContent}>Node JS</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.itemContent}>Vue Js</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Skills;
