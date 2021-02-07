import reducer from "./auth";
import { logIn, logOut } from "../actions";

const randomAction = {
    type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Auth reducer", () => {
    const state0 = reducer(undefined, randomAction);

    describe("authenticate", () => {
        it("login", () => {
            const state2 = reducer(state0, logIn());

            expect(state2).toEqual({
                isLoggedIn: true
            });
        });
        it("Logout", () => {
            const state4 = reducer(state0, logOut());

            expect(state4).toEqual({
                isLoggedIn: false
            });
        });
    });
});