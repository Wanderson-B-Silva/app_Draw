import { StyleSheet } from 'react-native';

const CatalogoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  flatlistContent: {
    paddingBottom: 20,
  },
  phoneCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  phoneImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  phoneInfo: {
    flex: 1,
  },
  phoneName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneBrand: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  phonePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 4,
  },
});

export default CatalogoStyles;