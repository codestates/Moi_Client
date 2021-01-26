import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    lineHeight: '160%',
    alignItems: 'stretch',
    marginBottom: '30px',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Nanum Gothic',
    color: '#343a40',
    marginBottom: '20px',
  },
  profile: {
    fontSize: 11,
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
});

interface ProfileProps {
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

const Profile: React.FC<ProfileProps> = ({ values }) => {
  const { profile } = values.info;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.profile}>{profile}</Text>
      </View>
    </>
  );
};

export default Profile;
