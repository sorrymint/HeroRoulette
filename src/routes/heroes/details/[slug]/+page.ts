import {error} from "@sveltejs/kit"

//NOTE this file is not page.server.ts because it needs data before load.
export async function load({params}) {

    const post = await import(`$lib/data/${params.slug}.md`);

    if (!post) {
        error(404, {message: "Hero not found."});
    }

    return {
        PostContent: post.default,
        meta: {...post.metadata, slug: params.slug},
    }
}