<template>
  <div>
    <t-head-menu default-value="2-1" expand-type="popup">
      <template #logo>
        <img height="48" src="..\assets\logo.jpg" alt="logo" />
      </template>
      <t-menu-item value="item1" style="margin-left: 450px;font-size: 15px;"> 概述 </t-menu-item>
      <t-submenu value="1">
        <template #title>
          <span>工具</span>
        </template>
        <t-menu-item value="1-2"> 数据处理 </t-menu-item>
        <t-menu-item value="1-3"> 分子可视化 </t-menu-item>
        <t-menu-item value="1-4"> 预测模型 </t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>开发者项目</span>
        </template>
        <t-menu-item value="2-2"> 在线团队 </t-menu-item>
        <t-menu-item value="2-3"> API </t-menu-item>
      </t-submenu>
      <t-menu-item value="item2" style="font-size: 15px;"> 我们 </t-menu-item>
      <t-submenu value="1">
        <template #title>
          <span>我的账号</span>
        </template>
        <t-menu-item value="1-2"> 我的信息 </t-menu-item>
        <t-menu-item value="1-3"> 我的团队 </t-menu-item>
        <t-menu-item value="1-4"> 退出登录 </t-menu-item>
      </t-submenu>
      <!-- <t-menu-item value="item2" style="font-size: 15px;"> 登录 </t-menu-item>
      <t-menu-item value="item2" style="font-size: 15px;"> 注册 </t-menu-item> -->
    </t-head-menu>
    <!-- <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler">
      <template #logo>
        <img height="48" src="..\assets\logo图.jpg" alt="logo" style="margin-left: 5%" />
        <img height="48" src="..\assets\logo3.jpg" alt="logo" />
      </template>
      <t-menu-item value="item1" style="margin-left: 600px;font-size: 15px;"> 概述 </t-menu-item>
      <t-submenu value="1" title="工具">
       
        <t-menu-item value="1-1"> 数据处理 </t-menu-item>
        <t-menu-item value="1-2"> 分子可视化 </t-menu-item>
        <t-menu-item value="1-3"> 预测模型 </t-menu-item>
      </t-submenu>
      <t-submenu value="2" title="开发者项目">
        <t-menu-item value="2-1"> 在线团队 </t-menu-item>
        <t-menu-item value="2-2"> API </t-menu-item>
      </t-submenu>
      <t-menu-item value="item2" style="font-size: 15px;"> 我们 </t-menu-item>
      <t-menu-item value="item2" style="font-size: 15px;"> 登录 </t-menu-item>
      <t-menu-item value="item2" style="font-size: 15px;"> 注册 </t-menu-item>
      <t-menu-item value="item2" style="font-size: 15px;" @click="visibleBody1 = true"> 一键导入 </t-menu-item>
      <t-menu-item value="item2" style="font-size: 15px;"> 设置 </t-menu-item>
      <t-dialog v-model:visible="visibleBody1" attach="body" header="上传" :on-confirm="() => (visibleBody1 = false)"
        :onConfirm="submitContent1">
        <template #body>
          <label for="albumname" class="form-label">请选择本地文件</label>
          <t-upload ref="uploadRef1" v-model="files1"
            action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
            :headers="{ a: 'N1', b: 'N2' }"  :multiple="multiple"
            :auto-upload="autoUpload" :upload-all-files-in-one-request="uploadInOneRequest"
            :is-batch-upload="isBatchUpload" :size-limit="{ size: 20, unit: 'MB' }" :max="5" :disabled="disabled"
            :allow-upload-duplicate-file="true" @select-change="handleSelectChange" @fail="handleFail"
            @success="handleSuccess" @one-file-success="onOneFileSuccess" @validate="onValidate" /></template>
      </t-dialog>

    </t-head-menu> -->
  </div>
</template>
    
<script>
import { ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
export default {
  componets:{ MessagePlugin },
  setup() {
    const visibleBody1 = ref(false);
    const uploadRef1 = ref();
    const files1 = ref([]);
    const multiple = ref(false);
    const uploadInOneRequest = ref(false);
    const autoUpload = ref(true);
    const isBatchUpload = ref(false);
    const disabled = ref(false);
    const handleFail = ({ file }) => {
      MessagePlugin.error(`文件 ${file.name} 上传失败`);
    };

    const handleSelectChange = (files) => {
      console.log('onSelectChange', files);
    };

    const handleSuccess = (params) => {
      console.log('success', params);
      MessagePlugin.success('上传成功');
    };
    const submitContent1 = () => {
      visibleBody1.value = false;
    };
    return {
      files1,
      multiple,
      uploadInOneRequest,
      autoUpload,
      isBatchUpload,
      disabled,
      handleFail,
      handleSelectChange,
      handleSuccess,

      visibleBody1,
      submitContent1,
      uploadRef1
    }
  }


}

</script>
    
<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>