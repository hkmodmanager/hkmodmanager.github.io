<template>
    <div>
        <div class="form-floating mb-3">
            <input class="form-control" id="name" v-model="name" @change="change">
            <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="ver" v-model="ver" @change="change">
            <label for="ver">Version</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="desc" v-model="desc" @change="change">
            <label for="desc">Description</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="authors" v-model="authors" @change="change">
            <label for="authors">Authors (Use ';' to split)</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="skinName" v-model="skinName" @change="change">
            <label for="skinName">Skin Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="url" class="form-control" id="skin" v-model="skin" @change="change">
            <label for="skin">Skin URL</label>
        </div>
        <div class="input-group mb-3">
            <label for="icon" class="input-group-text" @change="change">Icon</label>
            <input class="form-control" type="file" id="icon" ref="icon">
        </div>
    </div>
    <div class="mb-3">
        <h2>Output</h2>
        <textarea class="form-control" v-text="output" readonly style="min-height: 40em"></textarea>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const output = ref("");

const name = ref("");
const ver = ref("1.0.0.0");
const desc = ref("");
const authors = ref("");
const skin = ref("");
const skinName = ref("");
const icon = ref<HTMLInputElement>();

async function change() {
    const iconFile = icon.value?.files?.item(0);
    let iconData: string | undefined;
    if(iconFile) {
        iconData = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
            reader.readAsDataURL(iconFile);
        });
    }
    output.value = JSON.stringify({
        name: name.value.trim(),
        description: desc.value.trim(),
        version: ver.value.trim(),
        authors: authors.value.trim().split(';'),
        icon: iconData,
        additionalAssets: [
            {
                installRootDir: "mods",
                installPath: "Custom Knight/Skins" + (skinName.value == '' ? '' : ('/' + skinName.value.trim())),
                downloadUrl: encodeURI(skin.value).trim()
            }
        ],
        dependencies: [
            "Custom Knight"
        ]
    }, undefined, 4);
}

</script>
