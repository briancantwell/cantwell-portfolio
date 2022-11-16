<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
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
			data: projectData[data.$route.params.projectId].data,


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


	// 	url: (project.url),
	// 	logo: (project.logourl),
	// 	demo: (project.demourl),
	// title: (project.title),
	// 	objective: (project.description.objective),
	// 	//array of text items (text)
	// 	details: (project.description.details),
	// 	contribution: (project.description.contribution),
	// 	tools: (project.description.tools),
	// 	//array of links (text, url)
	// 	extlinks: (project.description.extlinks),
	// 	//array of images with description (imgurl, description)
	// 	data: (project.data),


	// return {



	// url: (project.url),
	// logo: (project.logourl),
	// demo: (project.demourl),
	// title:(project.title),
	// objective: (project.description.objective),
	// //array of text items (text)
	// details: (project.description.details),
	// contribution: (project.description.contribution),
	// tools: (project.description.tools),
	// //array of links (text, url)
	// extlinks: (project.description.extlinks),
	// //array of images with description (imgurl, description)
	// data: (project.data),




	// 	relatedProject: {
	// 		relatedProjectsHeading: 'Related Projects',
	// 		relatedProjects: [
	// 			{
	// 				id: 1,
	// 				title: 'Mobile UI',
	// 				img: require('@/assets/images/mobile-project-1.jpg'),
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Web Application',
	// 				img: require('@/assets/images/web-project-1.jpg'),
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'UI Design',
	// 				img: require('@/assets/images/ui-project-2.jpg'),
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Kabul Mobile App UI',
	// 				img: require('@/assets/images/mobile-project-2.jpg'),
	// 			},
	// 		],
	// 	},
	// };
	// },
	// 	mounted() {
	// 		feather.replace();

	// },
	// updated() {
	// 	feather.replace();
	// },
	// computed:{

	// },
	// methods: {
	// },
	// console.log(this.$route);
	// const data = projectData[this.$route.params.projectId];
	// console.log(data);

	// 	url: (project.url),
	// 	logo: (project.logourl),
	// 	demo: (project.demourl),
	// title: (project.title),
	// 	objective: (project.description.objective),
	// 	//array of text items (text)
	// 	details: (project.description.details),
	// 	contribution: (project.description.contribution),
	// 	tools: (project.description.tools),
	// 	//array of links (text, url)
	// 	extlinks: (project.description.extlinks),
	// 	//array of images with description (imgurl, description)
	// 	data: (project.data),

	// 	feather.replace();

	// },
	// updated() {
	// 	feather.replace();
	// },
	// computed:{

	// },
	// methods: {
	// },

};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :projectTitle="title" />

		<!-- Project gallery -->
		<ProjectGallery :projectData="data" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped>

</style>
