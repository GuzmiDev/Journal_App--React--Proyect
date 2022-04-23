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

import { firebase } from "../../firebase/firebase-config";
import AppRouter from "../../routers/AppRouter";
import { login } from "../../actions/auth";
import { act } from "react-dom/test-utils";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msg: null,
  },
  notes: {
    active: {
      id: "ABC",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter />", () => {
  test("debe de llamar el login si estoy autenticado", async () => {
    let user;

    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "test123");

      user = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });
    expect(login).toHaveBeenCalled();
  });
});
