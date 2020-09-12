<template>
    <div id="app-container">
        <div class="navtar-container" :class="{widthStyle:isCollapse}">
            <el-menu  class="el-menu-vertical-demo" @open="handleOpen"
                     @close="handleClose" :collapse="isCollapse"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     :router="isRouter"
                     :default-active="menuActive"
                     >
                <el-menu-item index="/addCard" >
                    <i class="el-icon-menu"></i>
                    <span slot="title">卡片管理</span>
                </el-menu-item>
                <el-menu-item index="/pullCard">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">构建历史</span>
                </el-menu-item>
                <el-menu-item index="/onlineCard">
                    <i class="el-icon-s-management"></i>
                    <span slot="title">上线历史</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content-container" :class="{widthStyleC:!isCollapse}">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span @click="isCollapse = !isCollapse">
                        <i class="el-icon-s-fold"></i>
                    </span>
                </div>
                <div class="text item">
                    <router-view></router-view>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        isCollapse: true,
        isRouter: true,
        menuActive:this.$route.path
      }
    },
    methods: {
      handleOpen () {
        console.log('open')
      },
      handleClose () {
        console.log('close')
      }
    },
    components: {},
  }
</script>

<style lang="scss" scoped>
    #app-container {
        width: 100%;
        display: flex;
        justify-content: start;
        height: 100%;
        /*position: relative;*/
        .navtar-container {
            width: 10%;
            height: 100%;
            /*position: absolute;*/
            /*margin-right: 5px;*/
            .el-menu-vertical-demo {
                /*list-style: none;*/
                /*margin: 0;*/
                /*display: inline-block;*/
                height: 100%;
                padding-top: 50px;
            }
            .is-active {
                color: rgb(255, 208, 75) !important;
            }

        }
        .widthStyle {
            width:4% !important;
        }
        .widthStyleC {
            width:90% !important;
        }
        .content-container {
            width: 96%;
            .box-card {
                width: 100% !important;
                height: 100%;
                margin-left: 0;
                padding-bottom: 20px;
                /deep/ .el-card__header {
                    box-shadow: 1px 1px 10px gainsboro;
                }
                /deep/ .el-card__body {
                    height: 100%;
                    background-color: gainsboro;
                    padding: 0;
                    overflow: hidden;
                }
            }
            .el-icon-s-fold:before {
                font-size: 20px;
                font-weight: 400;
            }
            .text {
                font-size: 14px;
            }

            .item {
                margin-bottom: 18px;
                background-color: gainsboro;
            }

            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }
            .clearfix:after {
                clear: both
            }

            .box-card {
                width: 480px;
            }
        }
    }
</style>
