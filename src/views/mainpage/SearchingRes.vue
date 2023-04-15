<template>
    <div style="height:97%">
        <t-card :bordered="false" style="width:100%; height:900px;">
            <t-radio-group default-value="1">
                <t-radio-button value="1">按亲和力大小降序排序</t-radio-button>
                <t-radio-button value="2">按亲和力大小升序排序</t-radio-button>
            </t-radio-group>
            <p></p>
            <t-label>
                亲和力范围：
            </t-label>
            <t-range-input :placeholder="['0', '15']" />
            <div>
                <t-space break-line style="margin-left: 70px;margin-top: 20px">
                    <div class="tdesign-demo-image-viewer__base" v-for="(url, index) in imgs" :key="url"
                        style="width:300px; height:300px;">
                        <t-image-viewer :images="imgs" :default-index="index" style="margin-top: 100px">
                            <template #trigger="{ open }">
                                <div class="tdesign-demo-image-viewer__ui-image">
                                    <img alt="test" :src="url" class="tdesign-demo-image-viewer__ui-image--img" />
                                    <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
                                        <span>
                                            <BrowseIcon size="1.4em" /> 预览
                                        </span>
                                    </div>
                                </div>
                                <div class="d-grid gap" style="margin-top: 5px">
                                    <t-button theme="default" variant="text" @click="visible[index] = true">{{ name[index]
                                    }}</t-button>
                                    <t-drawer v-model:visible="visible[index]" :show-overlay="false" :header="name[index]"
                                        :on-confirm="handleClose(index)" @close="handleClose(index)" size="350px">
                                        <t-image-viewer v-model:visible="visible2" :images="video"
                                            style="width:200px; height:200px;">
                                            <template #trigger>
                                                <div class="tdesign-demo-image-viewer__ui-image">
                                                    <img alt="test" :src="video[0]"
                                                        class="tdesign-demo-image-viewer__ui-image--img" />
                                                    <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen">
                                                        <span>
                                                            <BrowseIcon size="1.4em" /> 预览
                                                        </span>
                                                    </div>
                                                </div>
                                            </template>
                                        </t-image-viewer>
                                        <p></p>
                                        <div>
                                            亲和力数据：4.30
                                        </div>
                                    </t-drawer>
                                </div>
                            </template>
                        </t-image-viewer>
                    </div>
                </t-space>
            </div>
        </t-card>
        <t-card :bordered="false" style="margin-top: 20px">
            <t-pagination v-model="current" v-model:pageSize="pageSize" :total="100" @change="onChange"
                @current-change="onCurrentChange" style="margin-right: 20px" />
        </t-card>
    </div>
</template>
  
  
<script>
import { ref } from 'vue';
import { BrowseIcon } from 'tdesign-icons-vue-next';
export default {
    components: { BrowseIcon },
    setup() {
        const handleClick = (index) => {
            visible[index] = true;
        };
        const handleClose = (index) => {
            visible[index] = false;
        };
        const img1 = require('../../../src/assets/1.jpg');
        const img2 = require('../../../src/assets/2.jpg');
        const img3 = require('../../../src/assets/3.jpg');
        const img4 = require('../../../src/assets/4.jpg');
        const img5 = require('../../../src/assets/5.jpg');
        const img6 = require('../../../src/assets/6.jpg');
        const v1 = require('../../../src/assets/0.gif');
        const v2 = require('../../../src/assets/1.gif');
        const imgs = [img1, img2, img3, img4, img5, img6];
        const video = [v1, v2];
        const visible2 = ref(false);
        const onOpen = () => (visible2.value = true);
        const visible = ref([false, false, false, false, false, false]);
        const value1 = ref(['1', '3']);
        const name = ref(['C1=CC(=C(C=C1CC(=O)C(=O)O)I)', 'COC1=C(C=CC=N1)=CC=(=O)NC(C(C)C)', 'C1=CC(=C(N=C1)Cl)NC4=CC(=CC=C4)C', 'C1=CC(=NC(=C1I)N)N', 'C1=CC(=C(N=C1)C#N)I C1=CC(=NC=C1Br)I', 'C1=CC(=CC=C1CC(=O)C(=O)O)O']);
        return {
            visible,
            value1,
            imgs,
            handleClick,
            handleClose,
            name,
            video,
            visible2,
            onOpen
        }
    }

}
</script>
  
<style scoped>
div.box {
    height: 100vh;
}

button {
    text-align: center;
}

.tdesign-demo-image-viewer__ui-image {
    width: 100%;
    height: 100%;
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: var(--td-radius-small);
    overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--td-text-color-anti);
    line-height: 22px;
    transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
    opacity: 1;
    cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
    padding: 0 16px;
    height: 56px;
    width: 100%;
    line-height: 56px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    color: var(--td-text-color-anti);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
    flex: 1;
}

.tdesign-demo-popup__reference {
    margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
    cursor: pointer;
}

.tdesign-demo-image-viewer__base {
    width: 160px;
    height: 160px;
    margin: 10px;
    border: 4px solid var(--td-bg-color-secondarycontainer);
    border-radius: var(--td-radius-medium);
}
</style>
  
  