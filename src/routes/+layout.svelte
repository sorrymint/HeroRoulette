<script lang="ts">
    import '../app.css';
    import { Button } from '$lib/components/ui/button';

    let {children} = $props();
</script>

<div class="min-h-screen bg-card">
    <header class="border-b-2 border-primary bg-background shadow-glow">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <a href="/" class="flex items-center space-x-3 group">
                    <div class="w-10 h-10 bg-gradient-to-br from-marvel-primary to-secondary rounded-full flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-transform">
                        <span class="text-marvel-card font-bold text-xl">H</span>
                    </div>
                    <span class="text-2xl font-bold bg-gradient-to-r from-marvel-primary to-marvel-secondary bg-clip-text text-transparent">
                        Hero Roulette
                    </span>
                </a>

                <nav class="hidden md:flex space-x-2">
                    <Button variant="ghost" class="text-marvel-heading hover:text-marvel-primary hover:bg-marvel-primary/10 border border-transparent hover:border-marvel-primary/30 transition-all">
                        <a href="/">Spin Wheel</a>
                    </Button>
                    <Button variant="ghost" class="text-marvel-heading hover:text-marvel-primary hover:bg-marvel-primary/10 border border-transparent hover:border-marvel-primary/30 transition-all">
                        <a href="/heroes">Heroes</a>
                    </Button>
                </nav>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-4 py-8">
        {@render children()}
    </main>

    <footer class="border-t-2 border-marvel-primary bg-marvel-background mt-16 shadow-glow">
        <div class="container mx-auto px-4 py-6">
            <p class="text-center text-marvel-heading">
                This is a side project by
                <a href="https://github.com/sorrymint" class="text-marvel-primary hover:text-marvel-secondary underline font-semibold transition-colors">
                    sorrymint
                </a>
            </p>
        </div>
    </footer>
</div>
