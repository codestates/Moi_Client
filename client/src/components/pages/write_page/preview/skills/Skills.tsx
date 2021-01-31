import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { SkillItem } from '../../../../../modules/changeField/skills/types';

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
    fontWeight: 600,
    color: '#343a40',
    textDecoration: 'none',
    marginBottom: '5px',
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
    fontSize: 12,
    fontFamily: 'Nanum Gothic',
    marginBottom: '3px',
  },
  descContent: {
    flex: 1,
    fontSize: 9,
    fontFamily: 'Nanum Gothic',
    color: '#686868',
  },
  skillList: { flexDirection: 'column' },
  list: { flexDirection: 'row', marginBottom: '5px' },
  textBlock: {
    flexDirection: 'column',
  },
});

interface SkillsProps {
  values: {
    skills: SkillItem[];
  };
}

const Skills: React.FC<SkillsProps> = ({ values }) => {
  const { skills } = values;
  const printSkills = skills.map((ele, index) => {
    return (
      <View style={styles.list} key={index}>
        <Text style={styles.bulletPoint}>•</Text>
        <View style={styles.textBlock}>
          <Text style={styles.itemContent}>{ele.skill}</Text>
          <Text style={styles.descContent}>{ele.desc}</Text>
        </View>
      </View>
    );
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>기술</Text>
        </View>
        <View style={styles.skillList}>{printSkills}</View>
      </View>
    </>
  );
};

export default Skills;
