import Hero from "@ulixee/hero-playground";
import { NextApiRequest, NextApiResponse } from "next";

const getGitHubStartUiStats = async (hero) => {
    await hero.goto("https://github.com/BearStudio/start-ui-web");
    const startUiStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;
    return startUiStarsCounter;
};

const getGitHubStartUiNativeStats = async (hero) => {
    await hero.goto("https://github.com/BearStudio/start-ui-native");
    const startUiNativeStarsCounter = await hero.document.querySelector(".Counter.js-social-count").innerText;

    return startUiNativeStarsCounter;
};

const getTwitterStartUiStats = async (hero) => {
    await hero.goto("https://foller.me/startui_");
    const startUiFollowers = await hero.document
        .querySelector(".md-col.md-col-6.col-12.md-pl3")
        .querySelectorAll(".col-12.mb025")[0]
        .querySelector(".right").textContent;

    return startUiFollowers;
};

const getTwitterBearstudioStats = async (hero) => {
    await hero.goto("https://foller.me/_bearstudio");
    const bearstudioFollowers = await hero.document
        .querySelector(".md-col.md-col-6.col-12.md-pl3")
        .querySelectorAll(".col-12.mb025")[0]
        .querySelector(".right").textContent;

    return bearstudioFollowers;
};

export default async function handler(request: NextApiRequest, response: NextApiResponse<unknown>) {
    const { platform, account } = request.query;

    const hero = await new Hero({
        blockedResourceTypes: ["All"],
    });

    try {
        if (platform === "github") {
            if (account === "start-ui") {
                const data = await getGitHubStartUiStats(hero);
                hero.close();
                return response.status(200).json(data);
            }

            if (account === "start-ui-native") {
                const data = await getGitHubStartUiNativeStats(hero);
                hero.close();
                return response.status(200).json(data);
            }
        }

        if (platform === "twitter") {
            if (account === "start-ui") {
                const data = await getTwitterStartUiStats(hero);
                hero.close();
                return response.status(200).json(data);
            }

            if (account === "bearstudio") {
                const data = await getTwitterBearstudioStats(hero);
                hero.close();
                return response.status(200).json(data);
            }
        }
    } catch (error) {
        hero.close();
        return response.status(500).json(error);
    }

    hero.close();
    return response.status(400).json("Bad request");
}
