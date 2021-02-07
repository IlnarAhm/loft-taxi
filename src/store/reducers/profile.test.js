import reducer from "./profile";
import { saveProfile } from "../actions";

const randomAction = {
    type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Profile reducer", () => {
    const profile = {
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "12/23",
        cardName: "Ilnar Akhm",
        cvc: "123"
    };

    const state0 = reducer(undefined, randomAction);
    const state1 = reducer(state0, saveProfile(profile.cardNumber, profile.expiryDate, profile.cardName, profile.cvc));

    it("saves profile info", () => {
        expect(state1).toEqual(profile);
    });
});