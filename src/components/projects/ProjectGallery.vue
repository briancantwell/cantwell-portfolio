<script>
export default {
	props: ['projectData'],
	created(){

	}
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="item in projectData"
			:key="item.imgurl"
		>
			<img
				:src="item.imgurl"
				class=" rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt=""
			/>
		</div>
	</div>
</template>
