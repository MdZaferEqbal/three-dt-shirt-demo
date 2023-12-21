import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#FAF9F6',
    logoColor: '#ef4754',
    file: {},
    isLogoTexture:  true,
    isFullTexture: false,
    logoDecal: './tshirt-logo.svg',
    fullDecal: './tshirt-logo.svg',
});

export default state;
