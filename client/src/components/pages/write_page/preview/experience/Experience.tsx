import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: '20px',
  },
  experienceList: {
    flexDirection: 'row',
    marginBottom: '15px',
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
    fontSize: 9,
    fontFamily: 'Nanum Gothic',
  },
  itemContent: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Nanum Gothic',
    paddingBottom: '4px',
  },
  subContent: {
    flex: 1,
    fontSize: 8,
    fontFamily: 'Nanum Gothic',
    paddingBottom: '10px',
    color: '#686868',
  },
  skillList: { flexDirection: 'column', marginBottom: '5px' },
  experienceTitle: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingLeft: '60px',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: '5px',
    justifyContent: 'center',
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  desc: {
    fontFamily: 'Nanum Gothic',
    fontSize: 8,
  },
  descList: { flexDirection: 'row', paddingLeft: '60px' },
  work: {
    flexDirection: 'column',
  },
});
const Experience: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>경력</Text>
        </View>
        <View style={styles.experienceList}>
          <View style={styles.skillList}>
            <Text style={styles.period}>2020.02 - 2020.02</Text>
          </View>

          <View style={styles.work}>
            <View style={styles.experienceTitle}>
              <Text style={styles.itemContent}>코드 스테이츠 부트 캠프</Text>
              <Text style={styles.subContent}>
                소프트웨어 엔지니어링 과정 수료
              </Text>
            </View>

            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
          </View>
        </View>

        <View style={styles.experienceList}>
          <View style={styles.skillList}>
            <Text style={styles.period}>2020.02 - 2020.02</Text>
          </View>

          <View style={styles.work}>
            <View style={styles.experienceTitle}>
              <Text style={styles.itemContent}>코드 스테이츠 부트 캠프</Text>
              <Text style={styles.subContent}>
                소프트웨어 엔지니어링 과정 수료
              </Text>
            </View>

            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
            <View style={styles.descList}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.desc}>소프트웨어 개발</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Experience;
