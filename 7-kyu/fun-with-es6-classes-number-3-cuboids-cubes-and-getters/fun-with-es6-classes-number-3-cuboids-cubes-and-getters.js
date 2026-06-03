class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, {length, width, height});
  }
  
  get surfaceArea() {
    const {length, width, height} = this;
    return 2 * ((length * width) + (width * height) + (length * height));
  }
  
  get volume() {
    const {length, width, height} = this;
    return length * width * height;
  }
}
​
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}