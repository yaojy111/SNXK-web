<template>
    <div style="height:97%">
        <t-card :style="{ width: '100%', height: '2000px' }">
            <div style="font-size: 20px;margin-left: 80px">
                关于我们
                <t-card :style="{ width: '1000px', height: '180px' }" style="margin-top: 20px">
                    <div style="font-size: 15px">
                        我们知道，在药物研发过程中，蛋白质配体对接是非常重要的环节，但是传统的实验方法费时费力，而且不一定能够完全满足需求。
                    </div>
                    <div style="font-size: 15px">
                        因此，我们的平台可以帮助研究人员和药物设计者更快速、准确地预测蛋白质和药物之间的相互作用。具体来说，我们整理了大量蛋白质和药物分子的结构信息，并通过图神经网络算法进行训练和预测，以便预测蛋白质和药物之间的相互作用模式和亲和力打分。我们还为用户提供了可视化界面，用户可以在平台上查看药物分子的空间结构以及对接姿势，以获得更好的相互作用效果，并根据预测结果进行优化。
                    </div>
                    <div style="font-size: 15px">
                        我们希望，通过我们的平台，能够为药物研发和研究提供重要的帮助，缩短药物研发时间，降低研发成本，让更多的药物能够走进临床，并造福于人类的健康。
                    </div>
                </t-card>
            </div>
            <div style="font-size: 20px;margin-left: 80px;margin-top: 20px">
                单人介绍
                <t-card :style="{ width: '1000px', height: '420px' }" style="margin-top: 20px">
                    <div style="font-size: 15px">
                        <t-button variant="outline" theme="default">PNK</t-button>
                        我是彭宁康，来自南京师范大学，是一名研究蛋白质配体相关的本科生。我的研究兴趣主要集中在蛋白质配体对接预测方面，希望通过自己的努力为这一领域做出贡献。
                        本科期间，我曾参与过多个蛋白质配体对接预测相关的研究项目，通过实验和模拟等多种手段，深入研究了蛋白质配体相互作用的机制和规律。在这个过程中，我积累了丰富的实验和数据分析经验，并对蛋白质结构与功能有了更深入的理解。
                        期待各位通过邮箱联系我，提供反馈和建议，以帮助我们不断完善和优化该网站和研究成果。
                    </div>
                    <div style="font-size: 15px;margin-top: 10px">
                        <t-button variant="outline" theme="default">YQF</t-button>
                        我是余前锋，来自南京师范大学，是一名软件开发者，同样也是这个网站的协作者之一。在网站的建设过程中，我的主要职责是设计网站的页面布局和编写程序代码，确保网站的正常运行和用户体验的优化。
                        我在软件开发和网站建设方面拥有多年的经验，精通多种编程语言和开发工具，熟悉前端和后端技术的应用。在本次合作中，我充分发挥了自己的技能和专业知识，为网站的建设和优化做出了重要的贡献。
                        如果您在使用网站的过程中遇到任何问题或有任何建议，欢迎联系我们的团队。我们将会不断努力完善和优化这个网站，为您提供更好的服务和体验。
                    </div>
                    <div style="font-size: 15px;margin-top: 10px">
                        <t-button variant="outline" theme="default">YJY</t-button>
                        我是姚佳怡，来自南京师范大学。在这个网站的建设中，我是一名数据清洗和标注专员，负责对大量蛋白质配体相关数据进行清洗和标注，形成了一个大的数据集。
                        此外，我还设计了一种蛋白质配体的可视化方法，使用户可以更加直观地观察蛋白质和配体之间的结合状态。同时，我还使用机器学习算法设计了一个蛋白质配体对接姿势预测模型，帮助用户更准确地预测蛋白质和配体之间的结合位点和姿势。
                        我在生物信息学和计算机科学领域有着扎实的知识基础和技能，具备较强的数据处理和分析能力，熟悉多种编程语言和机器学习算法。通过这个项目，我不仅加深了自己对蛋白质配体相关知识的理解，也进一步提高了自己在数据处理和算法设计方面的能力。
                        我们团队将会不断完善和优化这个网站，为用户提供更加全面、准确和方便的服务。如果您有任何关于数据处理、可视化或者算法设计方面的问题或建议，欢迎联系我们，我们会尽快给您回复。
                    </div>
                </t-card>
            </div>
            <div style="font-size: 20px;margin-left: 80px;margin-top: 20px">
                与我们取得联系
                <t-card :style="{ width: '1000px', height: '420px' }" style="margin-top: 20px">
                    <div style="font-size: 18px; text-align:center">
                        通过邮箱
                        <p></p>
                        19210335@njnu.edu.cn
                         / 19210326@njnu.edu.cn
                    </div>
                    <p></p>
                    <div style="margin-left: 430px">
                        —— 或者 ——
                    </div>
                    <LogoGithubFilledIcon size="25px"/>
                    <LogoQqIcon size="25px"/>
                    <LogoWechatIcon size="25px"/>
                </t-card>
            </div>
        </t-card>
    </div>
</template>
  
  
<script>
import { LogoGithubFilledIcon,LogoQqIcon,LogoWechatIcon } from 'tdesign-icons-vue-next';
export default {
    components: { LogoGithubFilledIcon,LogoQqIcon,LogoWechatIcon },
    setup() {

        return {

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
  
  