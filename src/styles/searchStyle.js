import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    height: '100%',
  },
  filter: {
    alignItems: 'center',
    padding: 15,
  },
  chevronIcon: {
    width: 30,
    height: 35,
    right: '45%',
    top: '30%',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    color: '#737373',
  },
  showFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  viewsText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    color: '#737373',
  },
  iconContainer: {
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 5,
    marginLeft: 15,
  },
  filterActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 18,
    margin: 7.5,
    borderRadius: 5,
  },
  dropDownButton: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#F9F9F9',
  },
  blueButton: {
    backgroundColor: '#23A6F0',
  },
  dropDownButtonText: {
    marginRight: 6,
  },
  blueButtonText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    color: 'white',
  },

  searchResults: {},
  searchResultCard: {
    alignItems: 'center',
    marginTop: 65,
  },
  searchResultImage: {},
  searchResultTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#252B42',
    letterSpacing: 0.1,
    marginTop: 25,
  },
  searchResultDescription: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: '#737373',
    marginTop: 10,
  },

  searchResultPrices: {
    flexDirection: 'row',
    marginTop: 15,
  },
  searchResultOldPrice: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#BDBDBD',
  },
  searchResultNewPrice: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#23856D',
    marginLeft: 5,
  },

  searchResultColors: {
    flexDirection: 'row',
    marginTop: 15,
  },
  searchResultColor: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
    margin: 3,
    borderRadius: 8,
  },

  bgColorLightBlue: {
    backgroundColor: '#23A6F0',
  },
  bgColorGreen: {
    backgroundColor: '#23856D',
  },
  bgColorOrange: {
    backgroundColor: '#E77C40',
  },
  bgColorDarkBlue: {
    backgroundColor: '#252B42',
  },
});

export default style;
