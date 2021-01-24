import React from 'react';
import { Text, View, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // paddingBottom: '10px',
    // borderBottomWidth: 2,
    // borderBottomColor: '#343a40',
    // borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Nanum Gothic',
    // color: '#19a76d',
    color: '#343a40',
    marginBottom: '20px',
  },
  contact: {
    fontSize: 12,
    fontFamily: 'Nanum Gothic',
    // color: '#19a76d',
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
});
const Header: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailColumn}>
          <Text style={styles.name}>박준형</Text>
          <Link src="badsoap141@gmail.com" style={styles.contact}>
            이메일 : badsoap141@gmail.com
          </Link>
          <Text style={styles.contact}>주소 : 서울 특별시 중랑구 면목동</Text>
          <Text style={styles.contact}>연락처 : 010-2768-3037</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
