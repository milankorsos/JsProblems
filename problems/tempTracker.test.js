import TempTracker from './tempTracker';


describe('TempTracker', () => {

  const tracker = new TempTracker();

  tracker.insert(1);
  tracker.insert(2);
  tracker.insert(3);
  tracker.insert(3);
  tracker.insert(3);
  tracker.insert(4);
  tracker.insert(4);
  tracker.insert(4);

  test('getMax', () => {
    expect(tracker.getMax()).toEqual(4);
  });

  test('getMin', () => {
    expect(tracker.getMin()).toEqual(1);
  });

  test('getMean', () => {
    expect(tracker.getMean()).toEqual(3);
  });

  test('getMode', () => {
    expect(tracker.getMode()).toEqual(3);
  });
})
