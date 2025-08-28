export default function createInt8TypedArray(length, position, value) {
  const NewBuffer = new ArrayBuffer(length);
  const WritingBuffer = new DataView(NewBuffer);
  if (position < 0 || position >= NewBuffer.byteLength) {
    throw new Error('Position outside range');
  }
  WritingBuffer.setInt8(position, value);
  return WritingBuffer;
}
