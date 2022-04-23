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
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

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
store.dispatch = jest.fn();

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
    jest.clearAllMocks();
  });

  test("debe de renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la acción de startGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("debe de disparar el stratLogin con los respectivos argumentos", () => {
    wrapper.find("form").simulate("submit");

    expect(startLoginEmailPassword).toHaveBeenCalled();
  });
});
