<script>
	import { cubicOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import { showProgress } from '$lib/stores/stores.js'

	export let props
	let { text, score, outOf, color, bg, icon } = props
	export let delay = 0

	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut,
	})

	$: if ($showProgress) {
		setTimeout(() => {
			progress.set(score)
		}, delay)
	}
</script>

<div
	style:background-color={bg}
	class=" p-4 rounded-lg flex justify-between text-md"
>
	<div class="flex gap-3 items-center">
		<img src={icon} alt="icon" />
		<span class={`font-semibold`} style:color>{text}</span>
	</div>
	<p class="font-bold text-[#084C61] opacity-80">
		{#if $showProgress}
			<span>{Math.trunc($progress)}</span>
		{/if}
		<span class="text-[#084C61] opacity-70">/ {outOf}</span>
	</p>
</div>
