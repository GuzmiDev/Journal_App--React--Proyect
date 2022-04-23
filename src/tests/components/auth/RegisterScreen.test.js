/**
 *@jest-environment node
 */
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import "jsdom-global/register";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import RegisterScreen from "../../../componentes/auth/RegisterScreen";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msg: null,
  },
};

const store = mockStore(initState);

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <RegisterScreen>", () => {
  beforeEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });
  test("debe renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de hacer el dispatch de la acción respectiva", () => {
    const nameField = wrapper.find("input[name='name']");

    nameField.simulate("change", {
      target: {
        value: "",
        name: "name",
      },
    });

    wrapper.find("form").simulate("submit");

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "Name is required",
    });
  });
});
