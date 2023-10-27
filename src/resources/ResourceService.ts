import {Assets, Sprite } from 'pixi.js';
import ResourceList from "./ResourceList";

class ResourceService {
    static resources: any = {};
    static init = (onSuccess: () => void) => {
        // const {shared} = PIXI.Loader;
        // ResourceList.LIST.forEach(resource => shared.add(resource));
        // shared.load(onSuccess);

        const bundle = ResourceList.LIST
            .map(name => ({ [name]: name }))
            .reduce((acc, elem) => ({...acc, ...elem}), {})

        Assets.addBundle('assets', bundle);
        Assets.loadBundle('assets').then(r => onSuccess());

        // Or the easier
        // Assets.load(ResourceList.LIST).then();
    }

    static getTexture = (resourceName: string)  => {
        return Assets.get(resourceName).texture;
    }

    static getSprite = (resourceName: string) => {
        return new Sprite(ResourceService.getTexture(resourceName));
    }
}

export default ResourceService;