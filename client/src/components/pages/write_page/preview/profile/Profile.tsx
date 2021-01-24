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
    // color: '#19a76d',
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
const Profile: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.profile}>
          얼음에 대고, 있음으로써 인간의 광야에서 영원히 것이다. 있으며,
          청춘에서만 곧 굳세게 동력은 이상의 대한 황금시대의 봄바람이다. 긴지라
          봄바람을 반짝이는 생의 가슴에 피다. 같은 꽃이 황금시대의 위하여서,
          장식하는 싸인 아니더면, 품에 아름다우냐? 황금시대의 없는 가지에 품고
          이것이다. 끓는 위하여서 수 이것이다. 싸인 이것이야말로 피어나기
          위하여, 아름답고 석가는 내려온 사람은 사막이다.
        </Text>
      </View>
    </>
  );
};

export default Profile;
