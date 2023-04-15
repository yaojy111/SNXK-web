<template>
    <div style="height:97%">
        <t-card>
            <t-row :gutter="16" style="margin-top: 15px">
            <t-col :span="6">
                <t-card class="label" style="margin-left: 35px;width:400px; height:300px;">
                    <div style="font-size: 30px;margin-left: 50px;margin-top: 65px;">
                        <CaretRightSmallIcon />
                        快速导入
                    </div>
                    <div style="font-size: 30px;margin-left: 50px;">
                        <CaretRightSmallIcon />
                        海量数据查找
                    </div>
                    <div style="font-size: 30px;margin-left: 50px;">
                        <CaretRightSmallIcon />
                        支持多种类型文件
                    </div>
                </t-card>
            </t-col>
            <t-col :span="6">
                <div>
                    <t-card :bordered="false" style="width: 400px">
                        <div class="tdesign-demo-block-column">
                            <div style="font-size: 25px;">导入蛋白质文件：</div>

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
                        <div style="margin-top: 10px">支持pdb,mol,sdf,inchI和smiles文件格式 </div>
                    </t-card>
                </div>
            </t-col>
        </t-row>
        </t-card>
    </div>
</template>
  
  
<script>
import { ref } from 'vue';
import { CaretRightSmallIcon } from 'tdesign-icons-vue-next';
export default {
    components: { CaretRightSmallIcon },
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

div.label.t-card {
    background-image: url("../../../src/assets/bg.jpg");
    background-size: cover;
    color: white;
}
</style>
  
  