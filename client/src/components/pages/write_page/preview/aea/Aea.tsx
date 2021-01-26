import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { AeaItem } from '../../../../../modules/changeField/aea/types';

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

interface AeaProps {
  values: {
    aeas: AeaItem[];
  };
}

const Aea: React.FC<AeaProps> = ({ values }) => {
  const { aeas } = values;
  const printAeas = aeas.map((ele, index) => {
    return (
      <View style={styles.skillList} key={index}>
        <View style={styles.list}>
          <Text style={styles.period}>{`${ele.aeaDate}`}</Text>
          <View style={styles.experienceTitle}>
            <Text style={styles.itemContent}>{ele.aeaTitle}</Text>
            <Text style={styles.subContent}>{ele.aeaDesc}</Text>
          </View>
        </View>
      </View>
    );
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.profile}>수상 및 기타 활동</Text>
        </View>
        {printAeas}
      </View>
    </>
  );
};

export default Aea;
