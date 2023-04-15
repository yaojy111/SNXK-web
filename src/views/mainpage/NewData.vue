<template>
    <div style="height:97%">
        <t-layout>
            <t-aside>
                <t-menu theme="light" default-value="item1" style="margin-right: 40px" height="550px"
                    @change="changeHandler">
                    <t-menu-item value="item1"> 数据格式转换 </t-menu-item>
                    <t-menu-item value="item2"> 分子描述计算 </t-menu-item>
                    <t-menu-item value="item3"> 化学结构转换 </t-menu-item>
                    <t-menu-item value="item5"> 数据清理 </t-menu-item>
                </t-menu>
            </t-aside>
            <t-layout>
                <t-content>
                    <t-card :bordered="false" :style="{ width: '100%', height: '560px' }">
                        <div class="tdesign-demo-block-column-large" style="margin-left: 80px">
                            <div class="tdesign-demo-block-column">
                                <div>导入文件：</div>

                            </div>

                            <!-- data 表示传递给上传接口的额外数据；如果有更复杂的数据场景传递，请使用 format 方法 -->
                            <!-- abridgeName 表示省略文件名中间文本，保留两侧。左侧保留的文本数量，右侧保留的文本数量] -->
                            <!--
       use fileListDisplay to define any file info
       fileListDisplay={(h, { files }) => <div>{JSON.stringify(files)}</div>}
     -->
                            <t-space style="margin-top: 10px">
                                <t-upload v-model="files" :auto-upload="autoUpload" :theme="display"
                                    :data="{ extra_data: 123, file_name: 'certificate' }" :abridge-name="[10, 8]"
                                    :format-response="formatResponse" draggable
                                    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" />

                            </t-space>
                        </div>
                        <div style="margin-left: 80px; margin-top: 30px">
                            <div>转换格式：</div>
                            <t-space style="margin-top: 10px">
                                <t-select>
                                    <t-option key="apple" label="pdb" value="pdb" />
                                    <t-option key="orange" label="mol" value="mol" />
                                    <t-option key="banana" label="sdf" value="sdf" />
                                    <t-option key="orange" label="inchI" value="inchI" />
                                    <t-option key="orange" label="smiles" value="smiles" />
                                </t-select>
                            </t-space>
                        </div>
                        <div style="margin-left: 80px; margin-top: 30px">
                            <div>导出文件：</div>
                            <t-upload  style="margin-top: 10px" v-model="files2" :auto-upload="autoUpload" :theme="display"
                                :data="{ extra_data: 123, file_name: 'certificate' }" :abridge-name="[10, 8]"
                                :format-response="formatResponse" draggable
                                action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" />
                            <t-space style="margin-top: 10px">
                                <t-button>下载文件</t-button>
                            </t-space>
                        </div>
                    </t-card>
                </t-content>
            </t-layout>
        </t-layout>
    </div>
</template>
  
  
<script>
import { ref } from 'vue';
export default {
    setup() {
        const autoUpload = ref(true);
        const files = ref([]);
        const files2 = ref([
            {
                name: '默认文件',
                url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
                status: 'success',
                size: 1024,
                // 上传日期，如果接口返回的字段包含 uploadTime，则会以接口返回的为准，默认使用本地电脑时间。
                // 如果希望使用接口返回的上传日期，但是接口字段名不是 uploadTime，则可以使用函数 formatResponse 格式化接口数据
                uploadTime: '2022-09-25',
            },
        ]);
        const display = ref('file');
        return {
            autoUpload,
            files,
            files2,
            display
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
  
  