<template>
  <div>
    <div class="mont">
      <div v-for="(item,index) in list">
        <p @click="changetab(index)">{{item.title}}</p>
      </div>
    </div>
    <ul id="ul">
      <div v-for="(item,index) in list" class="mk">
        <div v-if="ind==index">
          <div v-for=" val in  item.msg">{{val.mk}}</div>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
import city from "../city/city.vue";
import utils from "../../utils/utils";
export default {
  data() {
    return {
      flag: true,
      list: [],
      ind: -1
    };
  },
  components: {
    city
  },
  methods: {
    changetab(index) {
      this.flag = !this.flag;
      this.ind = index;
    }
  },
  mounted() {
    utils("/list").then(res => {
      console.log(res, "res");
      this.list = res;
    });
  }
};
</script>
<style>
.mk {
  width: 100%;
  background: #fff;
  font-size: 13px;
}
.mont {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 18px;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
body {
  position: relative;
  overflow: hidden;
}
#ul {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 90px;
  left: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
}
</style>
