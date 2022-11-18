<script>


export default {
	props: ['project'],

};
</script>

<template>
	<router-link :to="'/projects/' + project.url"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div class="grid overflow-hidden grid-lines grid-cols-1 auto-rows-auto gap-2.5 gap-y-0">
			<div class="text-center px-4 py-6">
				<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
					{{ project.title }}
				</p>
				<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category
				}}</span>
			</div>
			<div>
				<img :src="project.logourl" :alt="project.title" class="rounded-2xl border-none m-auto p-2" />
			</div>

		</div>

	</router-link>
</template>

<style lang="scss" scoped>

</style>
