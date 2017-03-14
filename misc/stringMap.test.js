import stringMap from './stringMap';

const map = {'0': ['A', 'B'], '1': ['C', 'D'], '9': ['Z']}

test('stringMap', () => {
  expect(stringMap(map, '019')).toEqual(['ACZ', 'ADZ', 'BCZ', 'BDZ']);
})
