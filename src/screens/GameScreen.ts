import * as PIXI from 'pixi.js';
import SpriteCommon from "../components/common/SpriteCommon";
import ResourceList from "../resources/ResourceList";
import gsap from "gsap";

class GameScreen extends PIXI.Container {
    // region #Resources
    private readonly bg: SpriteCommon = new SpriteCommon(ResourceList.BG);
    private readonly cards: SpriteCommon[] = [];

    // endregion

    constructor(private app: PIXI.Application) {
        super();

        // @ts-ignore
        this.cards = new Array(6).fill(1).map(() => {
            const card = new SpriteCommon(ResourceList.CARD);
            card.on('click', () => this.do(card));
            return card;
        });

        this.start();
    }

    // region #Game flow
    public start = () => {
        this.addElements();
        this.arrangeElements();
    }

    public animate = () => {
    }

    private do(card: SpriteCommon) {
        const {x, y, defaultX, defaultY} = card;

        if (x !== defaultX || y !== defaultY) {
            this.cards.forEach(c => gsap.to(c, {x: c.defaultX, y: c.defaultY, rotation: 0, duration: .3}));
        } else {
            gsap.to(card, {
                y: 100, rotation: 6.28, duration: 1, onComplete: () => {
                    card.rotation = 0
                }
            });
            //gsap.to(this.bg, {rotation: 6.28, duration: 1, onComplete: () => {this.bg.rotation = 0}});
        }
    }

    private addElements = () => {
        this.addChild(this.bg);

        this.cards.forEach(card => this.addChild(card));
    }

    private arrangeElements = () => {
        // Bg
        this.bg.anchor.set(0.5);
        this.bg.position.set(this.bg.width / 2, 213);

        this.cards.forEach((card, i) => {
            card.scale.set(0.1);
            card.x = (card.width * i) + 150;
            card.y = 280;

            card.defaultX = card.x;
            card.defaultY = card.y;
        });

        // pixiLogo.anchor.set(0.5);
        // pixiLogo.x = app.renderer.width / 2;
        // pixiLogo.y = app.renderer.height / 2;
    }
    // endregion
}

export default GameScreen;