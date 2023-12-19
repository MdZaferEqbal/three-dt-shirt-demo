import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#FAF9F6',
    isLogoTexture:  true,
    isFullTexture: false,
    logoDecal: './diesel-5.svg',
    fullDecal: './diesel-5.svg',
});

export default state;
