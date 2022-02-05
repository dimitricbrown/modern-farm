import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plans) => {
    for (const plan of plans) {
        for (const planned of plan) {
            if (planned === "Asparagus") {
                addPlant(createAsparagus())
            } else if (planned === "Corn") {
                createCorn().forEach(addPlant)
            } else if (planned === "Potato") {
                addPlant(createPotato())
            } else if (planned === "Soybean") {
                addPlant(createSoybean())
            } else if (planned === "Sunflower") {
                addPlant(createSunflower())
            } else {
                addPlant(createWheat())
            }
        }
    }
}
