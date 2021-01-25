import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { EducationItem } from '../../../../../modules/changeField/education/types';

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
  },
  subContent: {
    flex: 1,
    fontSize: 8,
    fontFamily: 'Nanum Gothic',
    paddingBottom: '10px',
    color: '#686868',
  },
  skillList: { flexDirection: 'row' },
  experienceTitle: {
    flexDirection: 'column',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: '5px',
    justifyContent: 'center',
  },
  date: {
    paddingRight: '20px',
  },
});

interface ExperienceProps {
  values: {
    educations: EducationItem[];
  };
}
const Experience: React.FC<ExperienceProps> = ({ values }) => {
  const { educations } = values;

  const printEducations = educations.map((ele, index) => {
    return (
      <View style={styles.skillList} key={index}>
        <View style={styles.date}>
          <Text style={styles.period}>{`${ele.start} ~ ${ele.end}`}</Text>
        </View>
        <View style={styles.experienceTitle}>
          <Text style={styles.itemContent}>{ele.eduTitle}</Text>
          <Text style={styles.subContent}>{ele.eduDesc}</Text>
        </View>
      </View>
    );
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>학력 및 교육 이수</Text>
        </View>
        {printEducations}
      </View>
    </>
  );
};

export default Experience;
