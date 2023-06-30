<template>
    <div class="font">
        <t-divider />
        <t-row :gutter="16" style="margin-top: 25px">
            <t-col :span="4">
                <div><t-card :bordered="false" style="width: 200px;margin-left: 170px ">
                        <div style="font-size: 20px">
                            安全与合规
                        </div>
                        <div>
                            隐私政策
                        </div>
                        <div>
                            用户协议
                        </div>
                    </t-card></div>
            </t-col>
            <t-col :span="3">
                <div>
                    <t-card :bordered="false" style="width: 200px">
                        <div style="font-size: 20px">
                            资源中心
                        </div>
                        <div>
                            下载中心
                        </div>
                        <div>
                            帮助中心
                        </div>
                        <div>
                            交流社区
                        </div>
                    </t-card>
                </div>
            </t-col>
            <t-col :span="4">
                <div>
                    <t-card :bordered="false" style="width: 400px">
                        <div>
                            <ServiceIcon size="25px" />
                            联系作者：19190232@njnu.edu.cn
                        </div>
                        <div>
                            <UserTalkIcon size="25px" />
                            用户反馈：19190232@njnu.edu.cn
                        </div>
                    </t-card>
                </div>
            </t-col>
        </t-row>
    </div>
</template>
      
<script>
import { ServiceIcon, UserTalkIcon } from 'tdesign-icons-vue-next';
export default {
  components: { ServiceIcon, UserTalkIcon },
  

}
</script>
      
<style lang="less" scoped>
div.font {
  background-image: url("../../src/assets/black.jpg");
  background-size: cover;
}
div.t-card {
  background-image: url("../../src/assets/black.jpg");
  background-size: cover;
  color:white;
}
</style>