<script>
    import { Button } from '$lib/components/ui/button';
    import { Badge } from '$lib/components/ui/badge';
    import { Card, CardContent } from '$lib/components/ui/card';

    let { data } = $props();
    const { PostContent, meta } = data;

    const typeColors = {
        'Vanguard': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        'Duelist': 'bg-red-500/20 text-red-300 border-red-500/30',
        'Strategist': 'bg-green-500/20 text-green-300 border-green-500/30'
    };
</script>

<svelte:head>
    <title>{meta.name} - Hero Roulette</title>
</svelte:head>

<div class="space-y-8">
    <!-- Back Button -->
    <Button variant="ghost" class="w-fit">
        <a href="/heroes" class="flex items-center space-x-2">
            <span class="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
            <span>Back to Heroes</span>
        </a>
    </Button>

    <!-- Hero Header -->
    <div class="flex flex-col lg:flex-row gap-8 items-start">
        <div class="w-full lg:w-1/3">
            <Card class="overflow-hidden">
                <div class="aspect-square relative">
                    <img
                            src={meta.image || '/placeholder.svg?height=400&width=400'}
                            alt={meta.name}
                            class="w-full h-full object-cover"
                    />
                    <div class="absolute top-4 right-4">
                        <Badge class={typeColors[meta.type] || 'bg-muted text-muted-foreground'}>
                            {meta.type}
                        </Badge>
                    </div>
                </div>
            </Card>
        </div>

        <div class="w-full lg:w-2/3 space-y-4">
            <div class="space-y-2">
                <h1 class="text-4xl font-bold text-foreground">{meta.name}</h1>
                <div class="flex items-center space-x-2">
                    <Badge variant="secondary" class="text-sm">
                        {meta.type}
                    </Badge>
                </div>
            </div>
        </div>
    </div>

    <!-- Hero Content -->
    <Card class="bg-card border-border">
        <CardContent class="p-8">
            <div class="prose prose-invert max-w-none">
                <div class="text-card-foreground [&>h1]:text-card-foreground [&>h2]:text-card-foreground [&>h3]:text-card-foreground [&>h4]:text-card-foreground [&>h5]:text-card-foreground [&>h6]:text-card-foreground [&>p]:text-muted-foreground [&>ul]:text-muted-foreground [&>ol]:text-muted-foreground [&>li]:text-muted-foreground [&>strong]:text-card-foreground [&>em]:text-secondary [&>code]:text-primary [&>pre]:bg-muted [&>blockquote]:border-l-primary [&>blockquote]:text-muted-foreground [&>table]:text-muted-foreground [&>thead]:text-card-foreground [&>th]:text-card-foreground [&>td]:border-border [&>th]:border-border">
                    <PostContent />
                </div>
            </div>
        </CardContent>
    </Card>
</div>
