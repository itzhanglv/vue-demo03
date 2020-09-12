<template>
    <div class="pullCard-container">
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
          <el-button size="small" @click="open">批量上线</el-button>
      </div>
        <div class="table-data-container">
            <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
            max-height="1138px">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
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
                        prop="CDNUrl"
                        label="CDN地址"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="add_time"
                        label="创建时间"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作"
                        show-overflow-tooltip>
                    <template>
                        <el-button type="text">上线</el-button>
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
          tableData:[
            {
              id:1,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:2,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:3,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:4,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:5,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            }, {
              id:1,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:2,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:3,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:4,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:5,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            }, {
              id:1,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:2,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:3,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:4,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:5,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            }, {
              id:1,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:2,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:3,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:4,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            },
            {
              id:5,
              cardName:'多利益卡片',
              cardUrl:'dfajlfjflakjfsfk',
              CDNUrl:'fdlfjlkjflk',
              add_time:'2020-09-11 10:10:10'
            }
          ],
          value:'全部卡片'
        }
      },
      methods:{
        handleSelectionChange(){},
        open(){
          this.$prompt('', '确定要上线吗', {
            inputPlaceholder:'请输入上线标题',
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            console.log(value)
            // this.$message({
            //   type: 'success',
            //   message: '你的标题是: ' + value
            // });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '取消输入'
            // });
          });
        }
      }
    }
</script>
<style lang="scss" scoped>
    .pullCard-container {
        margin-top: 30px;
        padding-bottom: 20px;
        padding-left: 20px;
        .card-select {
            label {
                margin-right: 10px;
            }
            /deep/button {
                margin-left: 10px;
                vertical-align: middle;
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
        }
    }
</style>