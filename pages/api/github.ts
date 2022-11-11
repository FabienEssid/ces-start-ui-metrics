import Hero from "@ulixee/hero-playground";
import { NextApiRequest, NextApiResponse } from "next";

const getSocialMediaStatistics = async () => {
    const hero = new Hero();

    await hero.goto("https://github.com/BearStudio/start-ui-web");
    const startUiStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;

    await hero.goto("https://github.com/BearStudio/start-ui-native");
    const startUiNativeStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;

    await hero.goto("https://foller.me/startui_");
    const startUiFollowers = await hero.document
        .querySelector(".md-col.md-col-6.col-12.md-pl3")
        .querySelectorAll(".col-12.mb025")[0]
        .querySelector(".right").textContent;

    await hero.close();

    return { startUi: startUiStarsCounter, startUiNative: startUiNativeStarsCounter, startUiFollowers };
};

export default async function handler(request: NextApiRequest, response: NextApiResponse<unknown>) {
    const statistics = await getSocialMediaStatistics();
    return response.status(200).json(statistics);
}
