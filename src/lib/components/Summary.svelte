<script>
	import { resetProgress } from './../stores/stores.js'
	const evalCards = [
		{
			id: 1,
			text: 'Reaction',
			get: 80,
			from: 100,
			color: '#ff5757',
			bg: '#ffe6e6',
			icon: '/assets/icon-memory.svg',
		},
		{
			id: 2,
			text: 'Memory',
			get: 92,
			from: 100,
			color: '#ffb01f',
			bg: '#fff1d6',
			icon: '/assets/icon-reaction.svg',
		},
		{
			id: 3,
			text: 'Verbal',
			get: 61,
			from: 100,
			color: '#00bd91',
			bg: '#ddfdf5',
			icon: '/assets/icon-verbal.svg',
		},
		{
			id: 4,
			text: 'Visual',
			get: 72,
			from: 100,
			color: '#1125d4',
			bg: '#d6d8f5',
			icon: '/assets/icon-visual.svg',
		},
	]

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { showProgress } from '$lib/stores/stores.js'

	let reactionPoint = tweened(0, {
		duration: 1000,
		easing: cubicOut,
	})
	let memoryPoint = tweened(0, {
		duration: 1000,
		easing: cubicOut,
	})
	let visualPoint = tweened(0, {
		duration: 1000,
		easing: cubicOut,
	})
	let verbalPoint = tweened(0, {
		duration: 1000,
		easing: cubicOut,
	})

	$: {
		if ($showProgress && !$resetProgress) {
			reactionPoint.set(72)
			memoryPoint.set(80)
			verbalPoint.set(92)
			visualPoint.set(61)
		}
	}

	// $: console.log({ $resetProgress, $showProgress })
	const reset = () => {
		$resetProgress = true

		reactionPoint.set(0)
		memoryPoint.set(0)
		verbalPoint.set(0)
		visualPoint.set(0)
	}
</script>

<div
	class="border-purple-700 border-l-1 gradient p-8 space-y-4 sm:rounded-r-lg"
>
	<h2 class="font-semibold text-3xl text-amber-100 tracking-wide">Summary</h2>
	<div class="space-y-3">
		{#each evalCards as { text, get, from, color, bg, id, icon }}
			<div
				style:background-color={bg}
				class=" p-4 rounded-lg flex justify-between text-md"
			>
				<div class="flex gap-3 items-center">
					<img src={icon} alt="icon" />
					<span class={`font-semibold`} style:color>{text}</span>
				</div>
				<p class="font-bold text-purple-600">
					<!-- <span>{get}</span> -->
					{#if $showProgress}
						{#if id === 1}
							<span>{Math.trunc($reactionPoint)}</span>
						{:else if id === 2}
							<span>{Math.trunc($memoryPoint)}</span>
						{:else if id === 3}
							<span>{Math.trunc($verbalPoint)}</span>
						{:else}
							<span>{Math.trunc($visualPoint)}</span>
						{/if}
					{/if}
					<span class="text-purple-400">/ {from}</span>
				</p>
			</div>
		{/each}
	</div>
	<button
		on:click={reset}
		class="w-full rounded-full text-white font-medium text-xl px-8 py-4 btn-gradient"
		>Reset</button
	>
</div>

<style>
	.score-gradient {
		/* From https://css.glass */
		background: rgba(214, 81, 144, 0.37);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14.3px);
		-webkit-backdrop-filter: blur(14.3px);
		border: 1px solid rgba(214, 81, 144, 0.27);
	}
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
