import NetworkService from "../../../services/network.service";

let networkService = new NetworkService();

async function fetchrooms() {
  let data = await networkService.getRooms().then((data) => {
    console.log({ "Chat Reducer": data });
    return data;
  });
  return data;
}

const loadRooms = async function () {
  let data = await networkService.getRooms();
  return data;
};

const ChatReducer = async function (state = 0, action) {
  switch (action.type) {
    case "FETCH_ROOMS":
      state = await fetchrooms().then((state) => {
        console.log({ state });
        return state;
      });
      return state;

    case "LOAD_ROOMS":
      state = await loadRooms();
      console.log({ "LOAD_ROOM": state });
      return state;

    case "SHOW_CHAT":
      return state;

    case "SHOW_ROOMS":
      return async function () {
        let res = await networkService.getRooms();
        console.log(res);
      };
    default:
      return state;
  }
};

export default ChatReducer;
