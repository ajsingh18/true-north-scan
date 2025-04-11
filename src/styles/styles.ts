// styles.ts
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  button: {
    backgroundColor: '#048BA8',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4057',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F1F1',
  },
});
