<template>
    <div style="height:97%">
        <t-card :bordered="false" :style="{ width: '100%', height: '300px' }">
            <t-row :gutter="16" style="margin-left: 80px">
                <t-col :span="2">
                    <div style="font-size: 20px">
                        蛋白质分子可视化
                    </div>
                </t-col>
                <t-col :span="3">
                    <div>
                        <t-upload
                            action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
                            :tips="tips"
                            v-model="files"
                            theme="custom"
                            :beforeUpload="beforeUpload"
                            multiple
                            @fail="mounted"
                            @success="tips = ''"
                            >
                            <t-button theme="primary">上传文件</t-button>
                        </t-upload>
                    </div>
                </t-col>

            </t-row>
            <t-row :gutter="16" style="margin-left: 100px;margin-top: 20px">
                <t-col :span="4">
                    <div id="viewport" style="width:400px; height:200px;"></div>
                    <!-- <img alt="test" src="@\assets\1.jpg"  style="width:100%; height:100%;"/> -->
                </t-col>
                <t-col :span="6">
                    <t-card :bordered="false">
                        <table class="table table-striped" style="width:600px; height:200px;">
                        <tbody>
                            <tr>
                                <th scope="row">分子名称</th>
                                <td>{{list.pro_name}}</td>
                            </tr>
                            <tr>
                    
                                <th scope="row">分子化学式</th>
                                <td>{{list.formula}}</td>
                            </tr>
                            <tr>
        
                                <th scope="row">总结构重量</th>
                                <td>{{list.mol_weight}}</td>
                            </tr>
                            <tr>
                                <th scope="row">独立蛋白质链数</th>
                                <td>{{list.exact_mass}}</td>
                            </tr>
                            <tr>
                                <th scope="row">原子数</th>
                                <td>{{list.atoms}}</td>
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

import * as NGL from 'ngl';
import { ref } from 'vue';
// import md5 from "js-md5";
export default {
    file_tag: null,
    data() {
    },
    setup() {    
        let list = ref([
            {
                pro_name: " ",
                formula: " ",

            }

        ]);
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
            list,
            autoUpload,
            files,
            files2,
            display
        }
    },
    computed: {
        uploadAction() {
        return "/api/upload?tag=" + this.file_tag;
        },
        // 上传文件地址及请求头
        uploadHeaders() {
        return {
            authorization: "authorization-text",
        };
        },
    },
    methods:{
        mounted(){
            
            // document.addEventListener("DOMContentLoaded", function () {
            //     var stage = new NGL.Stage("viewport");
            //     stage.loadFile("1a1e_protein.pdb", {defaultRepresentation: true});
            // }); 
        },
        onFinish(values) {
            let body = { ...values };
            console.log("onFinish:", body);
        },
        onFinishFailed(err) {
            console.log("Failed:", err.error);
        },
        beforeUpload(file) {
            console.log("beforeUpload:", file);
            console.log(file.name)
            console.log("yes")
            // create a `stage` object
            var stage = new NGL.Stage("viewport", {backgroundColor: "white"});
            // load a PDB structure and consume the returned `Promise`
            stage.loadFile("1a1e_protein.pdb").then(function (component) {
            // add a "cartoon" representation to the structure component
            component.addRepresentation("cartoon");
            // provide a "good" view of the structure
            component.autoView();
            });

            this.list.pro_name="C-SRC（SH2 结构域）与 ACE-PHOSPHOTYR-GLU-（3-丁基哌啶）复合"
            this.list.formula="C9_H12_N_O6_P"
            this.list.mol_weight="25.69 kDa"
            this.list.exact_mass="2"
            this.list.atoms="1,759"
        },
        handleChange(info) {
            if (info.file == null) {
                return;
            }
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                console.log(info.file);
                this.$message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
        
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
  
  