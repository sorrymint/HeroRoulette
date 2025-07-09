export async function load() {
    // get all markdown files
    const itemModules = import.meta.glob("$lib/data/*.md")
    const items = []

    for (const path in itemModules) {
        // Type assertion for the imported module
        const module = await itemModules[path]()
        // @ts-ignore it's better than make this all type safe
        const metadata = module.metadata

        items.push(metadata)
    }

    return {
        items,
    }
}
