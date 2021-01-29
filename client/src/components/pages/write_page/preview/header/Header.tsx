import React from 'react';
import { Text, Image, View, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  image: {
    width: '70',
    height: '90',
    borderRadius: '4',
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
    fontWeight: 600,
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

interface HeaderProps {
  values: {
    info: {
      username: string;
      avatar: string;
      profile: string;
      contact: {
        address: string;
        phone: string;
        email: string;
        link: {
          facebook: string;
          twitter: string;
          blog: string;
          github: string;
          youtube: string;
          instagram: string;
        };
      };
    };
  };
}

const Header: React.FC<HeaderProps> = ({ values }) => {
  const {
    username,
    avatar,
    contact: { address, phone, email },
  } = values.info;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailColumn}>
          <Text style={styles.name}>{username}</Text>
          <Link src={email} style={styles.contact}>
            {`이메일 : ${email}`}
          </Link>
          <Text style={styles.contact}>{`주소 : ${address}`}</Text>
          <Text style={styles.contact}>{`연락처 : ${phone}`}</Text>
        </View>
        <Image src={avatar} style={styles.image} />
      </View>
    </>
  );
};

export default Header;
