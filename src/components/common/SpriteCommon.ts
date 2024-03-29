import * as PIXI from 'pixi.js';
import ResourceService from "../../resources/ResourceService";

class SpriteCommon extends PIXI.Sprite {
    public defaultX: number = 0;
    public defaultY: number = 0;

    constructor(resourceName: string) {
        super();

        this.eventMode = 'dynamic';

        this.texture = ResourceService.getTexture(resourceName);
    }
}

export default SpriteCommon;