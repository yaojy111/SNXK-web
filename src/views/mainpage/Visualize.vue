<template>
    <div style="height:97%">
        <t-card :bordered="false" :style="{ width: '100%', height: '350px' }">
            <t-row :gutter="16" style="margin-left: 0px">
                <t-col :span="2">
                    <div style="font-size: 20px">
                        生物分子可视化工具
                    </div>
                </t-col>
                <t-col :span="1">
                    <div>
                        <t-upload
                            action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
                            v-model="files"
                            theme="custom"
                            :beforeUpload="beforeUpload"
                            multiple
                            @fail="onFinish"
                            @success="mounted"
                            >
                            <t-button theme="primary" @click="onFinish">上传文件</t-button>
                        </t-upload>
                    </div>
                </t-col>
                <t-col :span="2">
                    <div>
                        <t-button theme="primary" @click="download" style="margin-left: 10px">下载可视化结果</t-button>
                    </div>
                </t-col>
                <t-col :span="3">
                    <div>
                        <t-button theme="primary" @click="animate">清空</t-button>
                    </div>
                </t-col>
            </t-row>
            <t-row :gutter="16" style="margin-left: 0px;margin-top: 10px; height:200px;">
                <t-col :span="4">
                    <div id="viewport" style="width:400px; height:300px;" ref="VisResult"></div>
                    <!-- <img alt="test" src="@\assets\1.jpg"  style="width:100%; height:100%;"/> -->
                </t-col>
                <t-col :span="6">
                    <t-card :bordered="false">
                        <table class="table table-striped" style="width:750px; height:200px;">
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
                                <th scope="row">序列长度</th>
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
import { saveAs } from 'file-saver';
// import md5 from "js-md5";
// import {makeImage} from 'ngl/src/viewer/viewer-utils.js'

let html2canvas = null;
export default {
    file_tag: null,
    stage: null,
    compNum: null,
    beforeMount() {
        import('html2canvas').then((plugin) => {
        html2canvas = plugin.default;
        });
    },
    data() {
        return{
            
        };        
    },
    setup() {    
        let list = ref([
            {
                pro_name: " ",
                formula: " ",
                mol_weight: " ",
                exact_mass: " ",
                atoms: " "
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
        mounted(values){
            if(this.stage == null){
                const stage = new NGL.Stage("viewport", {backgroundColor: "white"});
                this.stage = stage;
            } 
            
            if(this.compNum == 0 || this.compNum == null){
                if(values.file.name.includes("protein")){
                    this.list.pro_name="C-SRC (SH2 DOMAIN) COMPLEXED WITH ACE-PHOSPHOTYR-GLU-(3-BUTYLPIPERIDINE)"
                    // this.list.formula="C25_H39_N3_O9_P"
                    this.list.mol_weight="25.69 kDa"
                    this.list.exact_mass="107"
                    this.list.atoms="3,279"
                }
                else if(values.file.name.includes("ligand")){
                    this.list.pro_name="ACE-PHOSPHOTYR-GLU-(3-BUTYLPIPERIDINE)"
                    this.list.formula="C9_H12_N_O6_P"
                    this.list.mol_weight="556.566 Da"
                    this.list.exact_mass="4"
                    this.list.atoms="77"
                }
            }
            else{
                this.list.pro_name=""
                this.list.formula=""
                this.list.mol_weight=""
                this.list.exact_mass=""
                this.list.atoms=""
            }
            let body = { ...values };
            console.log("values:", body.file.name);
            var present = "label"
            if(values.file.name.includes("protein")){
                present = "cartoon"
            }
            else if(values.file.name.includes("ligand")){
                present = "ball+stick"//ball+stick
            }
            this.compNum++;
            this.stage.loadFile("PDBbind-2016/1a1e/"+body.file.name).then(function (component) {
                // add a "cartoon" representation to the structure component
                component.addRepresentation(present);
                // 循环所有的分子并设置随机颜色
                if(values.file.name.includes("ligand")){
                    component.eachRepresentation(repr => {
                        let letters = "0123456789ABCDEF";
                        let color = "#";
                        for (let i = 0; i < 6; i++) {
                            color  += letters[Math.floor(Math.random() * 16)];
                        }
                        repr.setColor(color);
                    });
                }
                
                // component.eachRepresentation(function (repr) {

                //     repr.setColor(NGL.Color(color));
                // });
                // // provide a "good" view of the structure
                component.autoView();
            });
        },
        animate(){            
            this.stage.removeAllComponents();
            this.compNum = 0;
            this.list.pro_name=""
            this.list.formula=""
            this.list.mol_weight=""
            this.list.exact_mass=""
            this.list.atoms=""
        },
        download(){
            const img = this.stage.makeImage()
            console.log("image:", img)
            // const node = this.$el;
            html2canvas(document.querySelector("#viewport")).then(canvas => {
                canvas.toBlob(blob => {
                    saveAs(blob, 'image.png');
                });
            });
            // console.log(this.$refs.VisResult)
            // let oImg = new Image();
            // html2canvas(document.querySelector("#viewport")).then(canvas => {
            //     oImg.src = canvas.toDataURL();  // 导出图片
            //     document.body.appendChild(oImg);  // 将生成的图片添加到body
            // });
            // console.log(oImg.src)
            // window.open(oImg.src, "_self");
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

            // var stage = new NGL.Stage("viewport", {backgroundColor: "white"});
            // stage.dispose();
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
        randomHexColor() { //随机生成十六进制颜色
            var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
            while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
            hex = '0' + hex;
            }
            return '#' + hex; //返回‘#'开头16进制颜色
        },
        randomRgbColor() { //随机生成RGB颜色
            var r = Math.floor(Math.random() * 256); //随机生成256以内r值
            var g = Math.floor(Math.random() * 256); //随机生成256以内g值
            var b = Math.floor(Math.random() * 256); //随机生成256以内b值
            return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
        },
        // 随机颜色的函数
        getRandomColor() {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
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
  
  