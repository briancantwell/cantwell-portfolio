<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import projectData from '@/data/project_data.js';




export default {
	name: 'ProjectView',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: (data) => {

		return {
			title: projectData[data.$route.params.projectId].title,
			//array of images with description (imgurl, description)
			data:
			{
				text: projectData[data.$route.params.projectId].data_text,
				images: projectData[data.$route.params.projectId].data,
			},

			projectInfo: {

				objectivesHeading: 'Objective',
				objectivesDetails: projectData[data.$route.params.projectId].description.objective,
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: projectData[data.$route.params.projectId].description.techs,

					}],
				projectDetailsHeading: 'Details',
				projectDetails: projectData[data.$route.params.projectId].description.details,
				extlinks: [
					{
						title: 'External Links',
						links: projectData[data.$route.params.projectId].description.extlinks,
					}
				],
				contributions: [
					{
						title: 'Contributions',
						text: projectData[data.$route.params.projectId].description.contribution,

					}
				],
				demo: projectData[data.$route.params.projectId].demo,
			},


		}
	},
	mounted() {
		feather.replace();

	},
	updated() {
		feather.replace();
	},
	computed: {

	},
	methods: {
	},


};
</script>

<template>
	<div class="container mx-auto ">
		<!-- Project header -->
		<ProjectHeader :projectTitle="title" />
	</div>
	<div
		class="container mx-auto grid overflow-hidden grid-lines grid-cols-1 md:grid-cols-12 auto-rows-auto gap-x-20 gap-y-0">


		<div class="box md:row-start-2 md:col-span-3">
			<!-- Project information -->
			<ProjectInfo :projectInfo="projectInfo" />
		</div>
		<div class="box md:row-start-2 md:col-span-9">
			<!-- Project gallery -->
			<ProjectGallery :projectData="data" />
		</div>
	</div>
</template>

<style scoped>

</style>
