<script>
export default {
	props: ['projectData'],
	created() {
		console.log(this.projectData.demo);
	}
};
</script>

<template>
	<!-- <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
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
	</div> -->

	<div class="grid grid-cols-1  sm:gap-10 mt-12">
		<div class="mb-10 sm:mb-0 border-2 border-black rounded-xl" v-for="item in projectData" :key="item.imgurl">
			<iframe class="pt-5 px-5" v-if="projectData[0].demo" :src="projectData[0].demo" frameborder="0" width="960" height="569" allowfullscreen="true"
				mozallowfullscreen="true" webkitallowfullscreen="true">
			</iframe>
		
			<img :src="item.imgurl" class=" rounded-xl cursor-pointer shadow-lg sm:shadow-none pt-5 px-5" alt="" />
			<p class="text-left p-5">
				{{ item.description }}
			</p>


		</div>
		
		
	</div>
</template>
