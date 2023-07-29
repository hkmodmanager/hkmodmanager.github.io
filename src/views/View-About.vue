<template>
    <div v-html="html">

    </div>
</template>

<script lang="ts" setup>
import MarkdownIt from "markdown-it";
//@ts-ignore
import md from '@/md/about.md';
const html = MarkdownIt({
    html: true
}).render(md as string);
</script>
