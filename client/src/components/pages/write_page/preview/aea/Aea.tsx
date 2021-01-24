import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: '20px',
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
  period: {
    flex: 1,
    fontSize: 7,
    fontFamily: 'Nanum Gothic',
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Nanum Gothic',
  },
  subContent: {
    flex: 1,
    fontSize: 7,
    fontFamily: 'Nanum Gothic',
    paddingBottom: '10px',
  },
  skillList: { flexDirection: 'row', marginBottom: '5px' },
  experienceTitle: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingLeft: '120px',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: '5px',
    justifyContent: 'center',
  },
});
const Aea: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>수상 및 기타 활동</Text>
        </View>
        <View style={styles.skillList}>
          <View style={styles.list}>
            <Text style={styles.period}>2020.02 - 2020.02</Text>
            <View style={styles.experienceTitle}>
              <Text style={styles.itemContent}>중랑구 하늘 노인정 해커톤</Text>
              <Text style={styles.subContent}>특별 상</Text>
            </View>
          </View>
        </View>
        <View style={styles.skillList}>
          <View style={styles.list}>
            <Text style={styles.period}>2020.02 - 2020.02</Text>
            <View style={styles.experienceTitle}>
              <Text style={styles.itemContent}>리액트 스터디</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Aea;
