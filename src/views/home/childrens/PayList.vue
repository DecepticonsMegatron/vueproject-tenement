<template>
  <div class="content">
    <div class="inputDom">
      <el-input v-model="input" placeholder="请输入收款金额" />

      <el-button type="success" @click="MakeQrcode">生成二维码</el-button>
    </div>

    <div class="qrcode" ref="qrcodeDom"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import QRcode from "qrcodejs2";

const input = ref("");

let qrcodeDom = ref(null);

let MakeQrcode = () => {
  (qrcodeDom.value.innerHTML = "");
    nextTick(() => {
      new QRcode(qrcodeDom.value, {
        text: input.value, //生成的二维码内容
        colorDark: "black", //二维码的颜色
        colorLight: "white", //二维码的背景色
        correctLevel: QRcode.CorrectLevel.H, 
      });
    });
};
</script>


<style>
.qrcode {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.inputDom {
  width: 400px;
  margin: 0 auto;
}

.content {
  text-align: center;
}
</style>