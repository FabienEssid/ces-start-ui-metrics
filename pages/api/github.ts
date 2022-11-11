import Hero from "@ulixee/hero-playground";
import { NextApiRequest, NextApiResponse } from "next";

const getGitHubStartUiStats = async () => {
    const hero = new Hero();
    await hero.goto("https://github.com/BearStudio/start-ui-web");
    const startUiStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;

    return startUiStarsCounter;
};

const getGitHubStartUiNativeStats = async () => {
    const hero = new Hero();
    await hero.goto("https://github.com/BearStudio/start-ui-native");
    const startUiNativeStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;

    return startUiNativeStarsCounter;
};
const getTwitterStartUiStats = async () => {
    const hero = new Hero();

    await hero.goto("https://foller.me/startui_");
    const startUiFollowers = await hero.document
        .querySelector(".md-col.md-col-6.col-12.md-pl3")
        .querySelectorAll(".col-12.mb025")[0]
        .querySelector(".right").textContent;

    return startUiFollowers;
};
const getTwitterBearstudioStats = async () => {
    const hero = new Hero();
    await hero.goto("https://foller.me/_bearstudio");
    const bearstudioFollowers = await hero.document
        .querySelector(".md-col.md-col-6.col-12.md-pl3")
        .querySelectorAll(".col-12.mb025")[0]
        .querySelector(".right").textContent;

    return bearstudioFollowers;
};

export default async function handler(request: NextApiRequest, response: NextApiResponse<unknown>) {
    const [gitHubStartUiStars, gitHubStartUiNativeStars, twitterStartUiFollowers, twitterBearStudioFollowers] =
        await Promise.all([
            getGitHubStartUiStats(),
            getGitHubStartUiNativeStats(),
            getTwitterStartUiStats(),
            getTwitterBearstudioStats(),
        ]);

    return response.status(200).json({
        startUi: gitHubStartUiStars,
        startUiNative: gitHubStartUiNativeStars,
        startUiFollowers: twitterStartUiFollowers,
        bearstudioFollowers: twitterBearStudioFollowers,
    });
}
