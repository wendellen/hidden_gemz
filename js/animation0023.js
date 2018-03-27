
class Weed extends mojs.CustomShape {
  getShape () { return '<path d="M110,75.6c-4.7-1.7-25.8-2.4-36,1.7,3.4-2,20.1-15.9,27.5-38.3-4.3,2-26.1,14-33.7,28.8,0,0,6.9-23-7.9-53.5C45,44.7,52,67.8,52,67.8,44.4,53,22.6,41,18.3,39,25.8,61.4,42.4,75.3,46,77.4,36,73.1,14.9,74,10,75.7,20.6,83.9,41,88,45.9,87.8c-5.3,1.7-19.7,8.3-20.8,11.8a52.63,52.63,0,0,0,33.6-9.8v14.5a1.51,1.51,0,0,0,1.4,1.4,1.43,1.43,0,0,0,1.4-1.4V89.8a52.78,52.78,0,0,0,33.6,9.8c-1.1-3.4-15.5-10-20.9-11.9C78.9,87.9,99.4,83.7,110,75.6Z"></path>'; }
  getLength () { return 300; }
}
mojs.addShape( 'weed', Weed );

const weed = new mojs.Shape({
  shape:        'weed',
  left:         '100%',
  fill:         { '#00F87F' : 'deeppink' },
  x:            { '-2000%' : 0  },
  scale:        { 3 : 3 },
  duration:     5000,
  repeat:       999,
}).play();