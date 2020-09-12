<template>
    <div class="onlineCard-container">
        <div class="card-select">
            <label>卡片:</label>
            <el-select v-model="value" placeholder="全部卡片" size="small" >
                <el-option value="全部卡片">全部卡片</el-option>
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="table-data-container">
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    max-height="1138px">
                <el-table-column
                        label="ID"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                        prop="cardName"
                        label="卡片名字"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="cardUrl"
                        label="卡片路径"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="online_time"
                        label="上线时间"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="online"
                        label="上线情况"
                        show-overflow-tooltip>
                    <template slot-scope="scope" >
                        <span :class="{onlineColor:scope.row.online}">{{ scope.row.online?'已上线':'已下线'}}</span></template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作"
                        show-overflow-tooltip>
                    <template>
                        <el-button type="text">预览</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          value:'全部卡片',
          tableData:[
            {
              id:1,
              cardName:'多利益卡1',
              cardUrl:'dffdfaf',
              online_time:'2020-09-11 10:10:10',
              online:1
            },
            {
              id:2,
              cardName:'多利益卡2',
              cardUrl:'dffdfaf',
              online_time:'2020-09-11 10:10:10',
              online:0
            },
            {
              id:3,
              cardName:'多利益卡3',
              cardUrl:'dffdfaf',
              online_time:'2020-09-11 10:10:10',
              online:1
            },
            {
              id:4,
              cardName:'多利益卡4',
              cardUrl:'dffdfaf',
              online_time:'2020-09-11 10:10:10',
              online:0
            },
            {
              id:5,
              cardName:'多利益卡5',
              cardUrl:'dffdfaf',
              online_time:'2020-09-11 10:10:10',
              online:1
            }
          ],
          options:[
            {
              value:'多利益卡1',
              label:'多利益卡1'
            },
            {
              value:'多利益卡2',
              label:'多利益卡2'
            },
            {
              value:'多利益卡3',
              label:'多利益卡3'
            },{
              value:'多利益卡4',
              label:'多利益卡4'
            },{
              value:'多利益卡5',
              label:'多利益卡5'
            }
          ],
        }
      },
      methods:{
      }
    }
</script>
<style lang="scss" scoped>
    .onlineCard-container {
        margin-top: 30px;
        padding-bottom: 20px;
        padding-left: 20px;
        .card-select {
            label {
                margin-right: 10px;
            }
        }
        .table-data-container {
            margin-top: 10px;
            /deep/.el-table thead {
                color: #000;
            }
            /deep/ .el-table th, .el-table tr {
                background-color: rgba(0,0,0,0.1) !important;
            }
            .onlineColor {
                color: red;
            }
        }
    }
</style>