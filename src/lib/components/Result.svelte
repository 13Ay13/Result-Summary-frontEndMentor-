<script>
	import { resetProgress } from './../stores/stores.js'
	import { cubicOut } from 'svelte/easing'
	import { PlaySolid } from 'svelte-awesome-icons'
	import { tweened } from 'svelte/motion'
	import { showProgress } from '$lib/stores/stores.js'

	console.log($showProgress)
	const progress = tweened(0, {
		duration: 2000,
		easing: cubicOut,
	})

	let visible = false
	const setProgress = () => {
		$resetProgress = false
		$showProgress = true
		setTimeout(() => {
			progress.set(76)
		}, 1020)

		setTimeout(() => {
			visible = true
		}, 2400)
	}

	$: {
		if ($resetProgress) {
			progress.set(0)
			visible = false
		}
	}

	function typewriter(node, { speed = .5 }) {
		const valid =
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(
				`This transition only works on elements with a single text node child`
			)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.03)

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0, i)
			},
		}
	}
</script>

<section class="space-y-6 sm:rounded-l-lg text-center gradient py-8 px-4">
	<h1 class="text-amber-100 text-3xl">Your Result</h1>
	<div
		class="w-40 h-40 mx-auto rounded-full score-gradient flex justify-center items-center flex-col gap-2"
	>
		{#if $progress === 0 && $resetProgress}
			<button on:click={setProgress}>
				<PlaySolid class="text-amber-200 border " />
			</button>
		{:else if $showProgress}
			<span class="text-4xl text-white">{Math.trunc($progress)}</span>
		{:else}
			<button on:click={setProgress}>
				<PlaySolid class="text-amber-200 border " />
			</button>
		{/if}
		<span class="text-gray-200 font-extrabold text-lg">of 100</span>
	</div>
	<div class="w-3/4 mx-auto text-white space-y-3 text-center">
		{#if $showProgress && visible}
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
