import { atom } from "recoil";

export const isOpenNavState = atom({
    key: "isOpenNavState",
    default: false
})

export const selectedMenuState = atom({
    key: "selectedMenuState",
    default: 0
})

export const selectedKeywordState = atom({
    key: "selectedKeywordState",
    default: 0
})