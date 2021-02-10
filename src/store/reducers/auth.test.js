import reducer from "./auth";
import { logIn, logOut } from "../actions";

const action = {
    type: `ACTION`
};

describe("Auth reducer", () => {
    const state0 = reducer(undefined, action);

    describe("authenticate", () => {
        it("login", () => {
            const state1 = reducer(state0, logIn());

            expect(state1).toEqual({
                isLoggedIn: true
            });
        });
        it("Logout", () => {
            const state2 = reducer(state0, logOut());

            expect(state2).toEqual({
                isLoggedIn: false
            });
        });
    });
});