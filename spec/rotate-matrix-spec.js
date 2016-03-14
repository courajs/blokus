import expect from 'expect';
import { rotateCW, rotateCCW } from '~/rotate-matrix';

describe('matrix rotation', function() {
  it('rotates a square matrix', function() {
    let start = [
      [0, 1],
      [3, 2]
    ];
    let cw = [
      [3, 0],
      [2, 1]
    ];
    let ccw = [
      [1, 2],
      [0, 3]
    ];
    expect(rotateCW(start)).toEqual(cw);
    expect(rotateCCW(start)).toEqual(ccw);
    expect(rotateCW(rotateCCW(start))).toEqual(start);
  });

  it('rotates matrices', function() {
    let start = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12]
    ];
    let cw = [
      [10, 7, 4, 1],
      [11, 8, 5, 2],
      [12, 9, 6, 3]
    ];
    let ccw = [
      [3, 6, 9, 12],
      [2, 5, 8, 11],
      [1, 4, 7, 10]
    ];
    expect(rotateCW(start)).toEqual(cw);
    expect(rotateCCW(start)).toEqual(ccw);
    expect(rotateCW(rotateCCW(start))).toEqual(start);
  });
});

