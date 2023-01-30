export const importMany = (folder) => {
    let store = {};
    folder.keys().map((item) => {
        store[item.replace("./", "")] = folder(item);
    });
    return store;
};
