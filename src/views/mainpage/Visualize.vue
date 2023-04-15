<template>
    <div style="height:97%">
        <t-card :bordered="false" :style="{ width: '100%', height: '300px' }">
            <t-row :gutter="16" style="margin-left: 80px">
                <t-col :span="2">
                    <div style="font-size: 20px">
                        选择文件
                    </div>
                </t-col>
                <t-col :span="3">
                    <div>
                        <t-button>浏览</t-button>
                    </div>
                </t-col>
            </t-row>
            <t-row :gutter="16" style="margin-left: 100px;margin-top: 20px">
                <t-col :span="4">
                    <img alt="test" src="@\assets\1.jpg"  style="width:100%; height:100%;"/>
                </t-col>
                <t-col :span="6">
                    <t-card :bordered="false">
                        <table class="table table-striped" style="width:600px; height:200px;">
                        <tbody>
                            <tr>
                                <th scope="row">Protein Name</th>
                                <td>glutathione s-transferase</td>
                            </tr>
                            <tr>
                    
                                <th scope="row">Formula</th>
                                <td>C23H28N3O6S</td>
                            </tr>
                            <tr>
        
                                <th scope="row">Molecular Weight</th>
                                <td>474.550</td>
                            </tr>
                            <tr>
                                <th scope="row">Exact Mass</th>
                                <td>474.550</td>
                            </tr>
                            <tr>
                                <th scope="row">No. of atoms</th>
                                <td>61</td>
                            </tr>
                        </tbody>
                    </table>
                    </t-card>
                </t-col>
            </t-row>
        </t-card>
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
  
  