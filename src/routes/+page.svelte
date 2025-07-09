<script>
    let {data} = $props()
</script>

<svelte:head>
    <title>Hero Roulette - Marvel Rivals Hero Selector</title>
</svelte:head>

<div class="space-y-16">
    <div class="text-center space-y-8">
        <div class="space-y-6">
            <h1 class="text-6xl md:text-7xl font-bold">
                <span class="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-lg">
                    Hero
                </span>
                <span class="text-foreground ml-4">Roulette</span>
            </h1>
            <div class="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow"></div>
            <p class="text-xl md:text-2xl text-card-foreground max-w-3xl mx-auto leading-relaxed">
                Can't decide which <span class="text-primary font-semibold">Marvel Rivals</span> hero to play?
                Let fate decide! Spin the wheel or browse our comprehensive hero guide.
            </p>
        </div>
    </div>
</div>
