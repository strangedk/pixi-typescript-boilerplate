class ResourceList {
    static BG = `bg.jpg`;
    static CARD = `card.png`;

    static CUSTOM_RESOURCES: string[] = [];

    static LIST: string[] = [
        ResourceList.BG,
        ResourceList.CARD,
        ...ResourceList.CUSTOM_RESOURCES,
    ];
}

export default ResourceList;