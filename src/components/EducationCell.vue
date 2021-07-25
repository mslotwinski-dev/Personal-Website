<template>
        <section >
                <div>{{school.SchoolName}}<br/>
                <span>{{school.Details}}</span></div>
            <div>{{school.Year}}</div>
        </section>
</template>

<script>

export default {
    props:['school']
}

</script>

<style>
@import '../main.css';
</style>
