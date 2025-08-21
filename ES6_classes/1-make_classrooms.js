import ClassRoom from './0-classroom';

function initializeRooms() {
  const NewClassRoom = [];
  NewClassRoom.push(new ClassRoom(19));
  NewClassRoom.push(new ClassRoom(20));
  NewClassRoom.push(new ClassRoom(34));
  return NewClassRoom;
}
export default initializeRooms;
