/**
 * @jest-environment node
 */
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);

describe("Pruebas con las acciones de Auth", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("login y logout deben de crear  la acción respectiva", () => {
    const uid = "XYZ456";
    const displayName = "Erick";

    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });

    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test("debe de realizar el startLogout", async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout,
    });

    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  test("debe de iniciar el startLoginEmailPassword", async () => {
    const email = "test@testing.com";
    const password = "test123";

    await store.dispatch(startLoginEmailPassword(email, password));

    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.uiStartLoading });
    expect(actions[1]).toEqual({
      type: types.login,
      payload: { uid: "ZUcW2pu3lMPEDcjsQ5tGho2434P2", displayName: null },
    });
    expect(actions[2]).toEqual({ type: types.uiFinishLoading });
  });
});
