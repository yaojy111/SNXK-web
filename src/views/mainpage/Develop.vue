<template>
    <div style="height:97%">
        <t-layout>
            <t-aside>
                <t-menu theme="light" default-value="item1" style="margin-right: 40px" height="450px"
                    @change="changeHandler">
                    <t-menu-item value="item1"> 创建新项目 </t-menu-item>
                    <t-menu-item value="item2"> 所有项目 </t-menu-item>
                    <t-menu-item value="item3"> 您的项目 </t-menu-item>
                    <t-menu-item value="item4"> 与您共享的 </t-menu-item>
                    <t-menu-item value="item5"> 已归档项目 </t-menu-item>
                    <t-menu-item value="item6"> 已删除项目 </t-menu-item>
                    <t-menu-item value="item7"> 添加从属关系 </t-menu-item>
                </t-menu>
            </t-aside>
            <t-layout>
                <t-content>
                    <t-card :bordered="false" :style="{ width: '100%', height: '450px' }">
                        <div :style="{ width: '80%', height: '560px' }">
                            <t-input v-model="input" placeholder="搜索项目" />
                            <t-table style="margin-top: 20px" row-key="index" :data="data" :foot-data="[{}]"
                                :columns="columns" :table-layout="tableLayout"
                                :max-height="fixedTopAndBottomRows ? 500 : 300"
                                :fixed-rows="fixedTopAndBottomRows ? [2, 2] : undefined" bordered>
                            </t-table>
                        </div>
                    </t-card>
                </t-content>
            </t-layout>
        </t-layout>
    </div>
</template>
  
  
<script>
import { CloudDownloadIcon, CloseCircleIcon } from 'tdesign-icons-vue-next';
import { ref } from 'vue';
export default {
    setup() {
        const data = [];
        for (let i = 0; i < 1; i++) {
            data.push({
                index: i + 1,
                t: ['HIV-1 protein.pdb'][i % 1],
                u: ['You'][i % 1],
                m: ['a few seconds ago by you'][i % 1],
            });
        }
        const tableLayout = ref('fixed');
        const fixedTopAndBottomRows = ref(false);

        const columns = ref([
            { colKey: 't', title: '标题', width: 150, foot: '-' },
            { colKey: 'u', title: '拥有者', width: 100, foot: '-' },
            { colKey: 'm', title: '最近一次修改', width: 200, foot: '-' },
            {
                colKey: 'operation',
                title: '操作',
                cell: () => {
                    return (
                        <t-tag shape="round">
                            <t-link>
                                <CloudDownloadIcon size="35px"/>
                            </t-link>
                            <t-link>
                                <CloseCircleIcon size="35px"/>
                            </t-link>
                        </t-tag>
                    );
                },
                width: 100, foot: '-' 
            },
        ]);
        return {
            tableLayout,
            columns,
            fixedTopAndBottomRows,
            data
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
  
  