<template>
    <div>
        <img class="logo-svg" src="../img/logo.svg" />
        <h1><strong>Hollow Knight Mod Manager</strong></h1>
        <template v-if="!isEmbedded">
            <a class="btn btn-primary fs-3" v-if="supportOS"
                href="https://github.com/hkmodmanager/HKModManager/releases/latest"
                >
                <i class="bi bi-download" /> {{ $t('nav.download') }} </a>
            <button class="btn btn-danger fs-3" v-else>
                {{ $t('home.notsupported') }}
            </button>
            <div class="text-muted">{{ $t('home.supportPlatform') }}</div>
        </template>
        <div class="container text-center">
            <div class="row">
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://github.com/hkmodmanager/HKModManager#readme">
                        <i class="bi bi-book w-100" style="font-size: 5em"/>
                        <h5 class="w-100">README</h5>
                    </a>
                </div>
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://discord.gg/VDsg3HmWuB">
                        <i class="bi bi-discord w-100" style="font-size: 5em"/>
                        <h5 class="w-100">Discord</h5>
                    </a>
                </div>
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://themulhima.github.io/Scarab/">
                        <img class="mt-3 mb-4 w-100" width="80" height="80" src="../img/scarab-logo.svg" />
                        <h5 class="w-100">Scarab+</h5>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://github.com/hk-modding/modlinks#readme">
                        <i class="bi bi-upload w-100" style="font-size: 5em"/>
                        <h5 class="w-100">{{ $t('home.publishMod') }}</h5>
                    </a>
                </div>
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://prashantmohta.github.io/ModdingDocs">
                        <i class="bi bi-book w-100" style="font-size: 5em"/>
                        <h5 class="w-100">{{ $t('home.startModding') }}</h5>
                    </a>
                </div>
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://github.com/hkmodmanager/ModpackSource#readme">
                        <i class="bi bi-upload w-100" style="font-size: 5em"/>
                        <h5 class="w-100">{{ $t('home.publishModpack') }}</h5>
                    </a>
                </div>
            </div>
            <div class="row" v-if="$i18n.locale.startsWith('zh')">
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://docs.qq.com/sheet/DSm90dmtWUUhhUmpP">
                        <i class="bi bi-book w-100" style="font-size: 5em"/>
                        <h5 class="w-100">Mod 相关信息对照</h5>
                    </a>
                </div>
                <div class="col m-2" />
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://flowus.cn/share/06d41931-f1e7-4f3b-a87d-95506950ac89">
                        <i class="bi bi-book w-100" style="font-size: 5em"/>
                        <h5 class="w-100">空洞骑士Mod使用教程</h5>
                    </a>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col m-2" />
                <div class="col m-2">
                    <a class="btn btn-dark w-100 d-flex flex-column" href="https://www.youtube.com/watch?v=z35cFvU0McQ">
                        <i class="bi bi-play-btn w-100" style="font-size: 5em"/>
                        <h5 class="w-100">Modding Tutorial</h5>
                    </a>
                </div>
                <div class="col m-2" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { supportOS } from '@/main';

const isEmbedded = window.parent != window.self;

function check() {
    if (isEmbedded) return;
    const route = useRoute();
    if (route.name == "get-command") {
        let cmd = location.href;
        const headpos = cmd.indexOf('#/command/');
        cmd = cmd.substring(cmd.indexOf('/', headpos + 4) + 1);
        console.log(cmd);
        window.location.href = "hkmm://" + cmd;
    }
}

onBeforeMount(() => {
    check();
});

onUpdated(() => {
    check();
});
</script>
