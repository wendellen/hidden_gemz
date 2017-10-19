
let starShape = '<path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>'

class Star extends mojs.CustomShape {
  getShape () { return starShape; }
  getLength () { return 300; }
}
mojs.addShape( 'star', Star );

function makeStar(scale, radius, stroke, duration) {
  return new mojs.Shape({
    shape:    'star',
    fill:     'none',
    scale:    scale,
    angle:    { 0 : 360 },
    radius:   radius,
    stroke:   stroke,
    duration:  duration,
    easing: 'quad.in',
    repeat:    999,
    })
}

makeStar(3, 10, { 'Orchid' : 'PeachPuff' }, 2000).play()
makeStar(3, 20, { 'Violet' : 'Moccasin' }, 2100).play()
makeStar(3, 30, { 'Plum' : 'PapayaWhip' }, 2200).play()
makeStar(3, 40, { 'Thistle	' : 'LightGoldenrodYellow' }, 2300).play()
makeStar(3, 50, { 'Lavender' : 'LemonChiffon' }, 2400).play()
makeStar(3, 60, { 'Orchid' : 'PeachPuff' }, 2500).play()
makeStar(3, 70, { 'Violet' : 'Moccasin' }, 2600).play()
makeStar(3, 80, { 'Plum' : 'PapayaWhip' }, 2700).play()
makeStar(3, 90, { 'Thistle	' : 'LightGoldenrodYellow' }, 2800).play()
makeStar(3, 100, { 'Lavender' : 'LemonChiffon' }, 2900).play()
