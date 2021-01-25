import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ExperienceItem } from '../../../../../modules/changeField/workExperience/types';

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
    fontWeight: 600,
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

interface ExperienceProps {
  values: {
    workExperience: ExperienceItem[];
  };
}

const Experience: React.FC<ExperienceProps> = ({ values }) => {
  const { workExperience } = values;

  const printExperience = workExperience.map((ele, index) => {
    //? Inner_list(array)
    const printWorkDesc = ele.desc.map((ele, index) => {
      return (
        <View style={styles.descList} key={index}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.desc}>{ele.description}</Text>
        </View>
      );
    });
    return (
      <View key={index} style={styles.experienceList}>
        <View style={styles.skillList}>
          <Text style={styles.period}>{`${ele.start} ~ ${ele.end}`}</Text>
        </View>

        <View style={styles.work}>
          <View style={styles.experienceTitle}>
            <Text style={styles.itemContent}>{ele.companyName}</Text>
            <Text style={styles.subContent}>{ele.positionName}</Text>
          </View>

          {printWorkDesc}
        </View>
      </View>
    );
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>경력</Text>
        </View>
        {printExperience}
      </View>
    </>
  );
};

export default Experience;
