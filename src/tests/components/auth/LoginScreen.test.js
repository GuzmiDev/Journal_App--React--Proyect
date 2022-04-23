/**
 * @jest-environment node
 */
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import "jsdom-global/register";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import LoginScreen from "../../../componentes/auth/LoginScreen";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msg: null,
  },
};

let store = mockStore(initState);

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <LoginScreen />", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("debe de renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
