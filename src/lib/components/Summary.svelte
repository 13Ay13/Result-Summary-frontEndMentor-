<script>
	import SummaryItem from './SummaryItem.svelte'
	import { loadCard } from '$lib/stores/stores'
	export let data

	loadCard.set(data.data)
</script>

<div
	class="border-purple-700 border-l-1 gradient p-8 space-y-4 sm:rounded-r-lg"
>
	<h2 class="font-semibold text-3xl text-amber-100 tracking-wide">Summary</h2>
	<div class="space-y-3">
		{#each $loadCard as { ...props }, i (crypto.randomUUID())}
			<SummaryItem {props} delay={700 + i * 300} />
		{/each}
	</div>
	<button
		class="w-full rounded-full text-white font-medium text-xl px-8 py-4
		btn-gradient">Continue</button
	>
</div>

<style>
	button {
		font-variation-settings: 'wght' 400;
		animation: btn 0.7s infinite alternate;
		transition: background 500ms cubic-bezier(0.19, 1, 0.22, 1);
	}

	button:hover {
		background: rgba(214, 81, 144, 1);
	}
	.btn-gradient {
		/* From https://css.glass */
		background: rgba(214, 81, 144, 0.81);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14.3px);
		-webkit-backdrop-filter: blur(14.3px);
		border: 1px solid rgba(214, 81, 144, 0.27);
	}

	@keyframes btn {
		0% {
			font-variation-settings: 'wght' 400;
		}
		100% {
			font-variation-settings: 'wght' 800;
		}
	}
</style>
