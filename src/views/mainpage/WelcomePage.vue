<template>
  <div style="height:97%">
    <t-card bordered :style="{ width: '100%', height: '500px' }" class="font">
      <div class="subtitle1" style="font-size: 50px; color:white; font-family:华文仿宋; margin-left: 700px;margin-top: 60px">
        基于图神经网络的
      </div>
      <div class="subtitle1" style="font-size: 50px; color:white; font-family:华文仿宋; margin-left: 600px">
        药物设计交互辅助平台
      </div>
    </t-card>
    <t-card class="part2">
      <t-button theme="primary" size="large" variant="outline" style="margin-left: 520px">立即开始</t-button>

      <div style="font-size: 18px; text-align:center;margin-top: 10px">
        <LogoWechatIcon size="25px" />
        使用微信注册
        <LogoGithubFilledIcon size="25px" style="margin-left: 150px" />
        使用Github注册
      </div>
      <div style="margin-left: 530px">
        —— 或者 ——
      </div>
      <div>
        <t-input-group separate style="margin-left: 350px;margin-top: 10px">
          <t-input v-model="input" placeholder="email@example.com" />
          <t-input />
        </t-input-group>
        <t-button style="margin-left: 30px">注册</t-button>
      </div>
      <t-checkbox style="margin-left: 500px;margin-top: 10px">
        我已阅读并同意<t-link theme="default" underline> 相关条款 </t-link></t-checkbox>
    </t-card>
    <t-card>
      <t-card :bordered="false" style="width: 900px; margin-left: 130px">
        <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" author="评论作者名" content="作为一名蛋白质配体对接姿势预测领域的研究生，我深知这个领域的重要性和挑战性。因此，我十分感激这个网站的帮助，让我能够更加高效地进行我的研究工作。
        这个网站为我提供了许多宝贵的资源，让我能够更快速地获取所需的数据和工具，并且更好地完成我的研究任务。
        同时，这个网站还提供了一些实用的工具和功能，比如蛋白质结构可视化、对接结果可视化等，这些工具让我更方便地展示我的研究成果，也让我的研究更加生动和直观。
        总之，这个网站为我在蛋白质配体对接姿势预测领域的研究工作提供了非常有力的支持和帮助，让我更加信心满满地继续我的研究工作。我对这个网站的贡献和努力表示由衷的感谢！" />

      </t-card>
    </t-card>
    <t-card>
      <t-row :gutter="16">
        <t-col :span="6">
          <div>
            <t-card bordered style="width: 400px;margin-left: 170px ">
              <div style="font-size: 30px">
                合作
              </div>
              <div>
                在线单一版本上合作
              </div>
              <div>
                实时查看合作者的编辑
              </div>
            </t-card>
          </div>
        </t-col>
        <t-col :span="6">
          <div>
            <t-card bordered style="width: 400px">
              <div style="font-size: 30px">
                可视化
              </div>
              <div>
                从蛋白质分子数据文件
              </div>
              <div>
                到3D结构图
              </div>
            </t-card>
          </div>
        </t-col>
      </t-row>
      <t-row :gutter="16" style="margin-top: 15px">
        <t-col :span="6">
          <div><t-card bordered style="width: 400px;margin-left: 170px ">
              <div style="font-size: 30px">
                文档历史
              </div>
              <div>
                看到已添加和已被删除
              </div>
              <div>
                回滚到任意历史版本
              </div>
            </t-card></div>
        </t-col>
        <t-col :span="6">
          <div>
            <t-card bordered style="width: 400px">
              <div style="font-size: 30px">
                精准预测
              </div>
              <div>
                高效筛选数据库
              </div>
              <div>
                精准预测对接姿势
              </div>
            </t-card>
          </div>
        </t-col>
      </t-row>
      <t-button theme="primary" size="large" variant="outline" style="margin-left: 520px;margin-top: 20px">立即注册</t-button>

    </t-card>
    <t-card>
      <div style="margin-left: 500px">
        我们的平台的创始和使用
      </div>
      <t-space>
        <t-image src="https://tdesign.gtimg.com/demo/demo-image-1.png" fit="cover"
          style="margin-left:450px;margin-top:20px;width: 120px; height: 120px " />
        <t-image src="https://tdesign.gtimg.com/demo/demo-image-1.png" fit="cover"
          style="margin-top:20px;width: 120px; height: 120px " />

      </t-space>
    </t-card>

  </div>
</template>


<script>
import { LogoWechatIcon, LogoGithubFilledIcon } from 'tdesign-icons-vue-next';
export default {
  components: { LogoWechatIcon, LogoGithubFilledIcon },
  setup() {
    const cover = require("../../../src/assets/font1.jpg");
    const infoMessage = `神农晓瞰：一种基于图神经网络的药物设计交互辅助平台`;
    return {
      cover,
      infoMessage,
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

div.font.t-card {
  background-image: url("../../../src/assets/font1.jpg");
  background-size: cover;
}</style>

