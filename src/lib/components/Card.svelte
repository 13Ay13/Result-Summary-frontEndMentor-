<script>
	import { confetti } from '@neoconfetti/svelte'
	import Result from '$lib/components/Result.svelte'
	import { showProgress } from '$lib/stores/stores.js'
	import Summary from '$lib/components/Summary.svelte'
</script>

{#if $showProgress}
	<span
		class="absolute left-[50%] top-28"
		use:confetti={{
			duration: 5600,
			force: 0.7,
			particleCount: 300,
			stageHeight: window.innerHeight,
			stageWidth: window.innerWidth,
		}}
	/>
{/if}

<div
	class="bg-gradient-to-br min-h-screen from-red-300 via-purple-500 to-blue-400 wrapper mx-auto"
>
	<div class="min-h-screen grid place-items-center">
		<div
			class="grid md:grid-cols-2 container lg:max-w-3xl rounded-xl border-x-4"
		>
			<Result />
			<Summary />
		</div>
	</div>
</div>

<style>
	.container {
		width: min(80%, 80rem);
	}
</style>
