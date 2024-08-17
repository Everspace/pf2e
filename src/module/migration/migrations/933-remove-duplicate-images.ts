import { ActorSourcePF2e } from "@actor/data/index.ts";
import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "@item/base/data/index.ts";

const REMOVED_IMAGE_PATH = "icons/magic/symbols/question-stone-yellow.webp";
const RECOLOR_ROOT = "pf2e/icon/core-recolors/";

const imageMigration: Record<ItemSourcePF2e["img"], ItemSourcePF2e["img"]> = {
    "systems/pf2e/icons/spells/aberrant-form.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/aberrant-whispers.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/abyssal-pact.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/access-lore.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/acid-splash.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/adaptive-ablation.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/aerial-form.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/athletic-rush.webp": REMOVED_IMAGE_PATH,
    "systems/pf2e/icons/spells/angel-form.webp": "icons/magic/holy/angel-winged-humanoid-blue.webp",
    "systems/pf2e/icons/spells/acidic-burst.webp": "icons/skills/toxins/cauldron-bubbles-overflow-green.webp",
    "systems/pf2e/icons/spells/geas.webp": "icons/equipment/head/mask-carved-wood-brown.webp",
    "systems/pf2e/icons/spells/abyssal-plague.webp": "icons/magic/lightning/bolt-strike-purple.webp",
};

const swapImage = (source: ActorSourcePF2e | ItemSourcePF2e) => {
    const replacePath = imageMigration[source.img];

    if (replacePath) {
        source.img = replacePath;
    }
};

export class Migration933NPCSystemSkills extends MigrationBase {
    static override version = 0.933;

    override async updateActor(source: ActorSourcePF2e): Promise<void> {
        swapImage(source);
    }

    override async updateItem(source: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void> {
        swapImage(source);
    }
}
