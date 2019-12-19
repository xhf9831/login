<template>
  <div id="body">
    <div class="tpsc">
      <div class="tz">支持拖拽</div>
      <el-upload class="upload-demo" drag action="/api/upload" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <div class="cj">支持裁剪</div>
      <el-button type="primary" @click="toggleShow">上传图片</el-button>
      <my-upload
        field="file"
        :width="300"
        :height="300"
        url="/api/upload"
        :params="params"
        :headers="headers"
        v-model="show"
        :value.sync="show"
        img-format="png"
      ></my-upload>
      <img :src="imgDataUrl" />
    </div>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  components: {
    myUpload
  },
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      imgDataUrl: "",
      headers: {
        smail: "*_~"
      }
    };
  },
  methods: {
    toggleShow() {
      this.show = true;
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#body {
  background-color: rgb(219, 219, 219);
  .tpsc {
    padding: 20px;
    .cj {
      font-family: "新宋体";
      font-weight: bold;
      margin-top: 30px;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .tz {
      font-family: "新宋体";
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>
