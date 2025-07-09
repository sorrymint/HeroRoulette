<script>
    import { Badge } from '$lib/components/ui/badge';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';

    let {data} = $props();

    // Group heroes by type
    const groupedHeroes = data.items.reduce((acc, hero) => {
        if (!acc[hero.type]) {
            acc[hero.type] = [];
        }
        acc[hero.type].push(hero);
        return acc;
    }, {});

    const typeColors = {
        'Vanguard': 'bg-blue-500/30 text-blue-200 border-blue-400/50 shadow-blue-500/20',
        'Duelist': 'bg-red-500/30 text-red-200 border-red-400/50 shadow-red-500/20',
        'Strategist': 'bg-green-500/30 text-green-200 border-green-400/50 shadow-green-500/20'
    };

    const typeGradients = {
        'Vanguard': 'from-blue-600 to-blue-800',
        'Duelist': 'from-red-600 to-red-800',
        'Strategist': 'from-green-600 to-green-800'
    };
</script>

<svelte:head>
    <title>Heroes - Hero Roulette</title>
</svelte:head>

<div class="space-y-12">
    <div class="text-center space-y-6">
        <h1 class="text-5xl font-bold">
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Choose Your</span>
            <span class="text-foreground ml-3">Hero</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow"></div>
        <p class="text-card-foreground text-xl max-w-2xl mx-auto">
            Discover detailed information about each Marvel Rivals hero
        </p>
    </div>

    {#each Object.entries(groupedHeroes) as [type, heroes]}
        <section class="space-y-6">
            <div class="flex items-center justify-center space-x-4">
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div class="flex items-center space-x-3">
                    <h2 class="text-3xl font-bold text-foreground">{type}s</h2>
                    <Badge class={`${typeColors[type]} shadow-lg text-lg px-3 py-1`}>
                        {heroes.length} {heroes.length === 1 ? 'Hero' : 'Heroes'}
                    </Badge>
                </div>
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each heroes as hero}
                    <Card class="group hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.03] bg-gradient-to-br from-card to-marvel-red border-2 border-primary/20 hover:border-primary/50 overflow-hidden">
                        <a href="heroes/details/{hero.slug}" class="block">
                            <div class="aspect-video relative overflow-hidden">
                                <img
                                        src={hero.image || '/placeholder.svg?height=200&width=300'}
                                        alt={hero.name}
                                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div class="absolute top-3 right-3">
                                    <Badge class={`${typeColors[hero.type]} shadow-lg`}>
                                        {hero.type}
                                    </Badge>
                                </div>
                                <div class={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${typeGradients[hero.type]}`}></div>
                            </div>

                            <CardHeader class="pb-2">
                                <CardTitle class="text-card-foreground group-hover:text-primary transition-colors text-xl">
                                    {hero.name}
                                </CardTitle>
                            </CardHeader>

                            <CardContent class="pt-0">
                                <div class="flex items-center justify-between">
                                    <span class="text-card-foreground/80 text-sm">Learn more about this hero</span>
                                    <span class="w-5 h-5 text-primary group-hover:translate-x-2 transition-all duration-200">→</span>
                                </div>
                            </CardContent>
                        </a>
                    </Card>
                {/each}
            </div>
        </section>
    {/each}
</div>
