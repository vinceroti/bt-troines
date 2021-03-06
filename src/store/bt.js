export default {
  namespaced: true,
  state: {
    reconnect: false,
    connected: false,
    connectedText: "Disconnected",
    power: "Unknown",
    device: null,
    devicesFound: [],
    color: [0, 0, 0],
  },
  getters: {
    reconnect: (state) => state.reconnect,
    connected: (state) => state.connected,
    connectText: (state) => state.connectedText,
    power: (state) => state.power,
    device: (state) => state.device,
    devicesFound: (state) => state.devicesFound,
    color: (state) => state.color,
  },
  mutations: {
    setReconnect(state, status) {
      state.reconnect = status;
    },
    setConnection(state, status) {
      state.connected = status;
    },
    setConnectText(state, status) {
      state.connectedText = status;
    },
    setPower(state, status) {
      state.power = status;
    },
    setDevice(state, status) {
      state.device = status;
    },
    setColor(state, status) {
      state.color = status;
    },
    setDevices(state, status) {
      state.devicesFound = status;
    },
  },
  actions: {
    reconnect(context, status) {
      context.commit("setReconnect", status);
    },
    connect(context, status) {
      context.commit("setConnection", status);
    },
    connectText(context, status) {
      context.commit("setConnectText", status);
    },
    power(context, status) {
      context.commit("setPower", status);
    },
    device(context, status) {
      context.commit("setDevice", status);
    },
    devicesFound(context, status) {
      context.commit("setDevices", status);
    },
    color(context, status) {
      context.commit("setColor", status);
    },
  },
};
