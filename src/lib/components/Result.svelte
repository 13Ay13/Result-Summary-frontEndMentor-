<script>
	import { cubicOut } from 'svelte/easing'
	import { PlaySolid } from 'svelte-awesome-icons'
	import { tweened } from 'svelte/motion'
	import { showProgress } from '$lib/stores/stores.js'
	import { typewriter } from '$lib/components/typewriter.js'

	const progress = tweened(0, {
		duration: 1500,
		easing: cubicOut,
	})

	let textVisiblity = false
	const setProgress = () => {
		$showProgress = true
		setTimeout(() => {
			progress.set(76)
		}, 2020)

		setTimeout(() => {
			textVisiblity = true
		}, 2150)
	}
</script>

<section class="space-y-6 sm:rounded-l-lg text-center gradient py-8 px-4">
	<h1 class="text-amber-100 text-3xl">Your Result</h1>
	<div
		class="w-40 h-40 mx-auto rounded-full score-gradient flex justify-center items-center flex-col gap-2"
	>
		{#if ($progress === 0 && $showProgress) || !$showProgress}
			<button on:click={setProgress}>
				<PlaySolid class="text-amber-200 border " />
			</button>
		{:else}
			<span class="text-4xl text-white">{Math.trunc($progress)}</span>
		{/if}
		<span class="text-gray-200 font-extrabold text-lg">of 100</span>
	</div>
	<div class="w-3/4 mx-auto text-white space-y-3 text-center">
		{#if $showProgress && textVisiblity}
			<span transition:typewriter class="text-2xl text-amber-100 font-semibold"
				>Great!</span
			>
			<p transition:typewriter class="w-[80%] mx-auto text-sm font-semibold">
				You scored higher than 65% of the people who have taken these tests.
			</p>
		{/if}
	</div>
</section>

<style>
	:global(.gradient) {
		/* From https://css.glass */
		background: rgba(51, 57, 105, 0.18);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3px);
	}

	.score-gradient {
		background: linear-gradient(hsl(256, 72%, 46%), hsla(241, 72%, 46%, 0));
	}
</style>
