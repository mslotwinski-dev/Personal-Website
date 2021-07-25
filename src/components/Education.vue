<template>
    <article class="dataCell" id="edu">
        <h1>Education</h1>
        <EducationCell :school= 'school' v-for="school in schools" :key="school.SchoolName" />

    </article>
</template>

<script>

import EducationCell from './EducationCell.vue'

export default {
    data () {
        return {
            schools: [
                {SchoolName:'IV Liceum Ogólnoszkałcące w Rzeszowie', Details:'Mathematics • Physics • IT', Year: '2019-2023'},
                {SchoolName:'ABCS', Details:'sadas • IT', Year: '2137-2023'}
            ]
        }
    },
    components: {
        EducationCell,
    }
}

</script>

<style>
@import '../main.css';
</style>
