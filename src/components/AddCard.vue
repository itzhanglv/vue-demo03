<template>
    <div class="addcard-container">
        <div class="addcart">
            <el-dialog :title="title" :visible.sync="dialogTableVisible">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="卡片名字" prop="cardName">
                        <el-input v-model="form.cardName"></el-input>
                    </el-form-item>
                    <el-form-item label="卡片路径" prop="cardUrl">
                        <el-input v-model="form.cardUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="卡片类型" prop="cardType">
                        <el-input v-model="form.cardType"></el-input>
                    </el-form-item>
                    <el-form-item label="其他参数" prop="params">
                        <el-input type="textarea" v-model="form.params"></el-input>
                    </el-form-item>
                    <el-form-item label="其他信息" prop="info">
                        <el-input type="textarea" v-model="form.info"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="dialogTableVisible=false">取消</el-button>
                        <el-button type="primary" @click="onSubmit('form')">确定</el-button>

                    </el-form-item>
                </el-form>
            </el-dialog>
            <el-button @click="addCard">添加卡片</el-button>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%"
                max-height="1138px">
            <el-table-column
                    prop="id"
                    label="ID"
                    min-width="10">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="cardName"
                    label="卡片名字"
                    min-width="15">
                <template slot-scope="scope">
                    <span>{{ scope.row.cardName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="cardType"
                    label="卡片Type"
                    min-width="15">
                <template slot-scope="scope">
                    <span>{{ scope.row.cardType }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="cardUrl"
                    label="卡片路径"
                    min-width="25">
                <template slot-scope="scope">
                    <span>{{ scope.row.cardUrl }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="params"
                    label="其他参数"
                    min-width="25">
                <template slot-scope="scope">
                    <span>{{ scope.row.params }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="info"
                    label="其他信息"
                    min-width="35">
                <template slot-scope="scope">
                    <span>{{ scope.row.info }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="add_time"
                    label="创建时间"
                    min-width="15">
                <template slot-scope="scope">
                    <span>{{ scope.row.add_time }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="操作"
                    min-width="10">
                <template slot-scope="scope">
                    <a href="" @click.prevent="edit(scope.row)">编辑</a><br/>
                    <a href="" @click.prevent="del(scope.$index)">删除</a>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogTableVisible: false,
        tableData: [
          {
            id: 1,
            cardName: '多利益卡片1',
            cardType: 1,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1dynamic-card-free-card1dynamic-card-fr' +
            'ee-card1dynamic-card-free-card1dynamic-card-free-card1dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 2,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 3,
            cardName: '多利益卡片3',
            cardType: 3,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 4,
            cardName: '多利益卡片4',
            cardType: 4,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 5,
            cardName: '多利益卡片5',
            cardType: 5,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 6,
            cardName: '多利益卡片6',
            cardType: 6,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 7,
            cardName: '多利益卡片7',
            cardType: 7,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 8,
            cardName: '多利益卡片1',
            cardType: 1,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 9,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 10,
            cardName: '多利益卡片1',
            cardType: 1,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 11,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 12,
            cardName: '多利益卡片1',
            cardType: 1,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 13,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 14,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
          {
            id: 15,
            cardName: '多利益卡片2',
            cardType: 2,
            cardUrl: 'dynamic-card-free-card1',
            params: 'dynamic-card-free-card1',
            info: 'dynamic-card-free-card1',
            add_time: '2020-09-10 08:10:10',
          },
        ],
        form: {
          cardName: '',
          cardUrl: '',
          cardType: '',
          params: '',
          info: ''
        },
        title: '添加卡片',
        rules: {
          cardName: [
            {type: 'string', required: true, message: '请输入卡片名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          cardUrl: [
            {type: 'string', required: true, message: '请输入卡片路径', trigger: 'change'}
          ],
          cardType: [
            {type: 'string', required: true, message: '请输入卡片类型', trigger: 'change'}
          ],
          params: [
            {type: 'string', required: true, message: '请输入其他参数', trigger: 'change'}
          ],
          info: [
            {type: 'string', required: true, message: '请输入其他信息', trigger: 'change'}
          ],
        }
      }
    },
    methods: {
      load () {
        console.log('aaa')
        var obj = {
          id: 1,
          cardName: '多利益卡片1',
          cardType: 1,
          cardUrl: 'dynamic-card-free-card1',
          params: 'dynamic-card-free-card1',
          info: 'dynamic-card-free-card1dynamic-card-free-card1dynamic-card-fr' +
          'ee-card1dynamic-card-free-card1dynamic-card-free-card1dynamic-card-free-card1',
          add_time: '2020-09-10 08:10:10',
        }
        this.tableData.push(obj)
      },
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            this.form.id = this.tableData.length + 1
            this.form.add_time = new Date().toString()
            this.tableData.push(this.form)
            this.dialogTableVisible = false
          } else {
            return false
          }
        })

      },
      addCard () {
        this.form.cardName = ''
        this.form.cardUrl = ''
        this.form.cardType = ''
        this.form.params = ''
        this.form.info = ''
        this.title = '添加卡片'
        this.dialogTableVisible = true
      },
      edit (data) {
        this.title = '修改卡片'
        this.dialogTableVisible = true
        this.form = data
      },
      del (index) {
        console.log(index)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .addcard-container {
        width: 100%;
        margin-top: 30px;
        /*overflow: hidden;*/
        padding-bottom: 20px;
        .el-table {
            width: 100%;
            margin-left: 20px;
            overflow: scroll;
            position: relative;
            /deep/ .cell {
                color: #000;
            }
            /deep/ th, tr {
                background-color: rgba(0, 0, 0, 0.1);
            }
            /deep/ a {
                display: inline-block;
                margin-bottom: 5px;
                text-decoration: none;
                color: #409eff;
            }
        }
        .el-button {
            margin-left: 20px;
            margin-bottom: 20px;
        }
        /deep/ .el-table__header-wrapper {
            .el-table__header {
                background-color: rgba(255, 255, 255, 0);
            }
        }
    }
</style>