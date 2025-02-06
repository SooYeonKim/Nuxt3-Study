<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="All Courses" />
      <PageDescription description="웹 개발 입문부터 실전까지 학습해보세요!" />
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <RouterLink v-slot="{ navigate }" custom :to="path">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
            @click="navigate"
          />
        </RouterLink>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
console.log('index.vue');
</script>
<script setup lang="ts">
const { courses } = await useCourses();
</script>

<style lang="scss" scoped></style>
