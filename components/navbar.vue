<template>
  <!-- <NuxtRouteAnnouncer />
  <NuxtWelcome /> -->
  <nav class="bg-[#111827] text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[4rem]">
      <NuxtLink to="/">
        โลโก้
      </NuxtLink>
      <div class="items-center gap-x-36 hidden sm:flex">
        <NuxtLink to="/">
          หน้าหลัก
        </NuxtLink>
        <NuxtLink :to="{ name: 'เหมารถ' }">เหมารถ</NuxtLink>
        <NuxtLink to="/about">
          {{ $t('welcome') }}
        </NuxtLink>
      </div>
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()
</script>

<style></style>