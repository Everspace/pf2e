import { ActorSourcePF2e } from "@actor/data/index.ts";
import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "@item/base/data/index.ts";

const REMOVED_IMAGE_PATH = "icons/magic/symbols/question-stone-yellow.webp";
const RECOLOR_ROOT = "systems/pf2e/icon/core-edits/";
const TODO = "what/the/heck.webp";

const imageMigration: Record<ItemSourcePF2e["img"], ItemSourcePF2e["img"]> = {
    // "systems/pf2e/icons/spells/aberrant-form.webp": REMOVED_IMAGE_PATH, // Custom but unused
    // "systems/pf2e/icons/spells/aberrant-whispers.webp": REMOVED_IMAGE_PATH, // Custom but unused
    "systems/pf2e/icons/spells/abundant-step.webp": `${RECOLOR_ROOT}/target-glowing-green.webp`,
    "systems/pf2e/icons/spells/abyssal-pact.webp": "icons/sundries/scrolls/scroll-writing-tan-grey.webp",
    "systems/pf2e/icons/spells/abyssal-plague.webp": "icons/magic/lightning/bolt-strike-purple.webp",
    // "systems/pf2e/icons/spells/abyssal-wrath.webp": REMOVED_IMAGE_PATH, // Custom but unused
    "systems/pf2e/icons/spells/access-lore.webp": "icons/sundries/books/book-turquoise-moon.webp",
    "systems/pf2e/icons/spells/achaekeks-clutch.webp": "icons/commodities/treasure/token-engraved-eye-red.webp",
    // "systems/pf2e/icons/spells/acid-arrow.webp": REMOVED_IMAGE_PATH, // Custom but unused
    "systems/pf2e/icons/spells/acid-splash.webp": "icons/magic/acid/projectile-smoke-glowing.webp",
    // "systems/pf2e/icons/spells/acid-storm.webp": REMOVED_IMAGE_PATH, // Custom but unused
    "systems/pf2e/icons/spells/acidic-burst.webp": "icons/skills/toxins/cauldron-bubbles-overflow-green.webp",
    "systems/pf2e/icons/spells/adapt-self.webp": "icons/creatures/magical/spirit-undead-ghost-purple.webp",
    "systems/pf2e/icons/spells/adaptive-ablation.webp": "icons/magic/unholy/energy-smoke-pink.webp",
    "systems/pf2e/icons/spells/admonishing-ray.webp": "icons/magic/unholy/beam-impact-purple.webp", // Very close visually, but still custom?
    "systems/pf2e/icons/spells/aerial-form.webp": "icons/creatures/birds/corvid-call-sound-glowing.webp",
    "systems/pf2e/icons/spells/agile-feet.webp": `${RECOLOR_ROOT}/feet-winged-boots-glowing-purple.webp`,
    "systems/pf2e/icons/spells/agitate.webp": TODO, // Trace of Psychic Scream from WoW
    // "systems/pf2e/icons/spells/agonizing-despair.webp"
    "systems/pf2e/icons/spells/air-bubble.webp": "icons/magic/water/orb-ice-opaque.webp",
    "systems/pf2e/icons/spells/airburst.webp": "icons/magic/air/air-pressure-shield-blue.webp",
    "systems/pf2e/icons/spells/air-walk.webp": "icons/magic/water/wave-water-teal.webp",
    // "systems/pf2e/icons/spells/alarm.webp"
    "systems/pf2e/icons/spells/allegro.webp": "icons/skills/movement/feet-winged-boots-blue.webp",
    "systems/pf2e/icons/spells/all-is-one-one-is-all.webp": `${RECOLOR_ROOT}/orb-ice-web-red.webp`,
    // "systems/pf2e/icons/spells/alter-reality.webp"
    "systems/pf2e/icons/spells/anathematic-reprisal.webp": TODO, // Trace of Psychic Scream from WoW
    // "systems/pf2e/icons/spells/ancestral-defense.webp"
    // "systems/pf2e/icons/spells/ancestral-form.webp"
    "systems/pf2e/icons/spells/ancestral-memories.webp": "icons/commodities/treasure/puzzle-cube.webp",
    "systems/pf2e/icons/spells/ancestral-touch.webp": "icons/commodities/bones/bones-hand-grey.webp",
    "systems/pf2e/icons/spells/angel-form.webp": "icons/magic/holy/angel-winged-humanoid-blue.webp",
    "systems/pf2e/icons/spells/angelic-halo.webp": TODO, // Custom but used lots?
    // "systems/pf2e/icons/spells/angelic-messenger.webp"
    // "systems/pf2e/icons/spells/angelic-wings.webp"
    "systems/pf2e/icons/spells/anima-invocation.webp": TODO, // Custom but used lots?
    "systems/pf2e/icons/spells/animal-allies.webp": "icons/creatures/invertebrates/wasp-swarm-movement.webp",
    "systems/pf2e/icons/spells/animal-feature.webp": "icons/commodities/biological/eye-lizard-orange.webp",
    "systems/pf2e/icons/spells/animal-form.webp": "icons/creatures/mammals/wolf-howl-moon-gray.webp",
    // "systems/pf2e/icons/spells/animal-form-bear.webp"
    "systems/pf2e/icons/spells/animal-messenger.webp": "icons/creatures/birds/raptor-owl-flying-moon.webp",
    "systems/pf2e/icons/spells/animal-vision.webp": "icons/creatures/mammals/dog-husky-white-blue.webp",
    // much later
    "systems/pf2e/icons/spells/geas.webp": "icons/equipment/head/mask-carved-wood-brown.webp",
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
