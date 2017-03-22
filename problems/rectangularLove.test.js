import rectangle from './rectangularLove';

const rect1 = { // base
  leftX: 0,
  bottomY: 0,
  width: 3,
  height: 3
};

const rect2 = { // smaller, in base
  leftX: 1,
  bottomY: 1,
  width: 1,
  height: 1
};

const rect3 = { // same size as base but intersecting
  leftX: 1,
  bottomY: 1,
  width: 3,
  height: 3
};

const rect4 = { // intersection of base and rect3
  leftX: 1,
  bottomY: 1,
  width: 2,
  height: 2
};

const rect5 = { // not intersecting
  leftX: 4,
  bottomY: 5,
  width: 3,
  height: 3
}

describe('rectangle', () => {
  xtest('they are the same size', ()=> {
    expect(rectangle(rect1, rect1)).toEqual(rect1);
  });

  xtest('rect1 includes rect 2', ()=> {
    expect(rectangle(rect1, rect2)).toEqual(rect2);
  });

  xtest('they are intersecting each other', ()=> {
    expect(rectangle(rect1, rect3)).toEqual(rect4);
  });

  xtest('they are not intersecting each other', ()=> {
    expect(rectangle(rect1, rect5)).toEqual(null);
  });
});
