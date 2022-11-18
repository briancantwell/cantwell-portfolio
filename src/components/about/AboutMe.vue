<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'HI, I am Brian Cantwell!',
				},
				{
					id: 2,
					bio:
						'In 2014, after many years of working various job in retail, food service, and manual & CNC manufacturing I decided to return to school. I began attending Riverside City College and Norco College to start my journey, eventually transferring to San Bernardino Valley College to complete my general education. I was accepted into University of California, Irvine in 2018 perusing a degree in Computer Game Science, but decided to change to Informatics as I found interface and user experience design fascinating and rewarding.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<!-- <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/hor-pf.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div> -->

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
