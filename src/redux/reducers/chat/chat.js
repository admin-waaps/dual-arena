// import io from "socket.io-client";

// const sendMessage = (e) => {
//   e.preventDefault();

//   const data = { username, message, createdDate: new Date() };

//   socket.emit("send_message", JSON.stringify(data));

//   setMessage("");
// };

const ChatReducer = async function (state = 0, action) {
  switch (action.type) {

    case "SEND_MESSAGE":
      return state


    case "FETCH_ROOMS":
      return state;

    case "LOAD_ROOMS":
      return state;

    case "SHOW_CHAT":
      return state;

    case "SHOW_ROOMS":
      return state

    default:
      return state;
  }
};

export default ChatReducer;
