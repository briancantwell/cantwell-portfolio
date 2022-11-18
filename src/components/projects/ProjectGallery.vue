<script>
export default {
	props: ['projectData'],
	created() {
		// console.log(this.projectData.length);
	},
	// data() {
	// 	return {
	// 		images: [],
	// 	};
	// },
	// mounted(){
	// 	this.images = this.projectData;
	// },
	// mounted() {
	// 	// this.importAll(require.context('@/assets/speculative-story/', true, /\.(jpg|png)$/));
	// 	console.log(this.projectData[0].path);
	// 	const path = this.projectData[0].path;
	// 	this.importAll(require.context(path, true, /\.(jpg|png)$/));

	// },

	// methods: {
	// 	importAll(r) {
	// 		r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
	// 	},
	// },
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

	<div class="grid grid-cols-1 gap-y-5 text-left text-ternary-dark dark:text-ternary-light">
		<!-- creates 2 columns for images to reduce page length -->
		<div v-if="projectData.images.length > 6">
			<div class="grid overflow-hidden grid-lines grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2.5">
				<div v-if="projectData.text" class="whitespace-pre-wrap md:col-span-2">
					<p>
						{{ projectData.text }}
					</p>
				</div>
				<div class="md:mb-0 border-2 border-black rounded-xl" v-for="item in projectData.images"
					:key="item">

					<img :src="item.imgurl" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none "
						alt="" />
					<p v-if="item.description" class="text-left p-5">
						{{ item.description }}
					</p>
				</div>				
			</div>
		</div>
		<!-- uses below div if 5 or fewer than images -->
		<div v-else>
			<div class="mb-2 border-2 border-black rounded-xl drop-shadow-2xl" v-for="item in projectData.images" :key="item.imgurl">
				<div>
					<img :src="item.imgurl" class=" rounded-xl cursor-pointer shadow-lg sm:shadow-none pt-5 px-5"
						alt="" />
				</div>
				
				<p class="p-5">
					{{ item.description }}
				</p>
			</div>
		</div>

	</div>
</template>

