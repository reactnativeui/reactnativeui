import { StyleSheet, View } from 'react-native';

export function ExampleView({ children }: { children: React.ReactNode }) {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,

    backgroundColor: '#FFFFFF',
    borderColor: '#DEE2E6',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 4,
  },
});
