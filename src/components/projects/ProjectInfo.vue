<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
		<!-- Single project left section details -->
		<div class="w-full text-left">

			<!-- Single project objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.objectivesHeading }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>
			<!-- Single project details -->

			<div class="mb-7" v-if="projectInfo.projectDetails">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.projectDetailsHeading }}
				</p>
				<ul class="font-general-regular text-primary-dark dark:text-ternary-light list-disc list-inside">
					<li v-for="detail in projectInfo.projectDetails" :key="detail.text">
						{{ detail.text }}
					</li>
				</ul>
			</div>
			<!-- Single project contributions -->
			<div class="mb-7" v-if="projectInfo.contributions[0].text">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.contributions[0].title }}
				</p>
				<ul class="font-general-regular text-primary-dark dark:text-ternary-light list-none">
					<li v-for="item in projectInfo.contributions[0].text" :key="item.text">
						{{ item.text }}
					</li>
				</ul>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.technologies[0].title }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>


			<!-- Single project external links -->
			<div class="mb-7" v-if="projectInfo.extlinks[0].links">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.extlinks[0].title }}
				</p>

				<ul class="font-general-regular text-primary-dark dark:text-ternary-light list-disc list-inside">
					<li v-for="link in projectInfo.extlinks[0].links" :key="link.url">
						<a :href="link.url" target="_blank">{{ link.text }}</a>
					</li>
				</ul>

			</div>
		</div>
		<!-- end left section -->


</template>
