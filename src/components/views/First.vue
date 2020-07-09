<template>
    <div class="content">
        <div class="nav">
            <img class="nav-img" src="../../assets/left.png" alt="">
            <div class="nav-title">日程</div>
        </div>
        <div class="tab">
            <div
                :class="num == index?'active':''"
                v-for="(item,index) in tableArr"
                @click="changeTab(index)"
                title=""
            >{{item.title}}</div>
        </div>
        <div class="time-box">
            <p class="time-month">2020年5月</p>
            <ul class="week-day">
                <li v-for="(v,i) in week">{{v}}</li>
            </ul>
            <div class="time-day">
                <div
                    v-for="(c,o) in day"
                    @click="changeDay(o)"
                    :class="current == o?'display':''"
                >{{c}}</div>
            </div>
            <div class="open-month"></div>
        </div>
        <ul class="time-part">
            <li>
                <p>11:00</p>
            </li>
            <div style="position: relative;font-size: 20px;" v-for="(v,i) in list" :key="i">
                <div @click="inputClick(i)">
                    <input
                        type="text"
                        :disabled="v.disabled"
                        @blur="getValue(i)"
                        v-model="v.value"
                        ref="input"
                    >
                </div>
                <div class="add-class" style="" v-if="v.show" @click="clickAgain(i)">再次点击新增日程</div>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
  name: "First",
  data() {
    return {
      tableArr: [
        {
          title: "日试图"
        },
        {
          title: "周试图"
        },
        {
          title: "月试图"
        }
      ],
      week: ["日", "一", "二", "三", "四", "五", "六"],
      num: 0,
      day: ["5", "6", "7", "8", "9", "10", "11"],
      current: 0,
      list: [{ disabled: true, show: false, value: "" }]
    };
  },
  methods: {
    changeTab: function(index) {
      this.num = index;
    },
    changeDay: function(o) {
      this.current = o;
    },
    inputClick(i) {
      if (this.list[i].disabled == false) {
        return;
      }
      this.list[i].show = true;
    },
    clickAgain(i) {
      this.list[i].show = false;
      this.list[i].disabled = false;
      let that = this;
      setTimeout(function() {
        that.$refs.input[i].focus();
      }, 500);
    },
    getValue(i) {
      console.log(this.list[i].value);
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
.nav {
  width: 100%;
  height: 128px;
  background: #366cb3;
  display: flex;
  align-items: center;
}

.nav-img {
  display: block;
  width: 24px;
  height: 40px;
  margin-left: 32px;
}

.nav .nav-title {
  font-size: 36px;
  color: white;
  margin: 0 auto;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 96px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05),
    0px 2px 0px 0px rgba(0, 0, 0, 0.05) inset;
}

.tab div.active {
  position: relative;
}

.tab div.active::after {
  position: absolute;
  background: #ffa800;
  content: "";
  width: 40px;
  height: 6px;
  left: 15px;
  top: 60px;
}

.time-month {
  font-size: 32px;
  margin-left: 42px;
  color: #366cb3;
}

.time-box {
  width: 100%;
  height: 280px;
  background: #ffffff;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 12px 20px 0px rgba(131, 134, 163, 0.12);
  position: relative;
}

.week-day {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0;
  font-size: 28px;
  color: #366cb3;
}

.time-day {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 28px;
  color: black;
}

.time-day div.display {
  width: 76px;
  height: 76px;
  background: #366cb3;
  color: white;
  text-align: center;
  line-height: 76px;
  border-radius: 20px;
}

.open-month {
  width: 40px;
  height: 6px;
  background: #366cb3;
  position: absolute;
  left: 50%;
  bottom: 20px;
}

.time-part {
  list-style: none;
  padding-left: 34px;
  display: flex;
}

.time-part li {
}

.time-part div input {
  width: 620px;
  border: none;
  border-bottom: 2px solid #f1eff2;
  outline: none;
  margin-left: 20px;
}

.add-class {
  width: 622px;
  height: 100px;
  background: #519cf9;
  border-radius: 0px 0px 0px 20px;
  font-size: 28px;
  padding-left: 40px;
  padding-top: 24px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
}
</style>
