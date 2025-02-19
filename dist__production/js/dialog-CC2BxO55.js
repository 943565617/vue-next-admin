import{d as e,b as l,_ as a,c as o,V as d,P as t,ai as m,o as s,a as r,T as u,U as i,S as n}from"./@vue-5amejw8K.js";const c={class:"system-user-dialog-container"},p={key:0},b={class:"dialog-footer"},f=e({__name:"dialog",emits:["refresh"],setup(e,{expose:f,emit:g}){const x=g,V=l(),h=a({ruleForm:{userName:"",userNickname:"",roleSign:"",department:[],phone:"",email:"",sex:"",password:"",overdueTime:"",status:!0,describe:""},deptData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),_=()=>{h.dialog.isShowDialog=!1},F=()=>{_()},w=()=>{_(),x("refresh")},v=()=>{h.deptData.push({deptName:"vueNextAdmin",createTime:(new Date).toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:(new Date).toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:(new Date).toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]})};return f({openDialog:(e,l)=>{"edit"===e?(h.ruleForm=l,h.dialog.title="修改用户",h.dialog.submitTxt="修 改"):(h.dialog.title="新增用户",h.dialog.submitTxt="新 增"),h.dialog.isShowDialog=!0,v()}}),(e,l)=>{const a=m("el-input"),f=m("el-form-item"),g=m("el-col"),x=m("el-option"),_=m("el-select"),v=m("el-cascader"),D=m("el-date-picker"),N=m("el-switch"),S=m("el-row"),U=m("el-form"),T=m("el-button"),y=m("el-dialog");return s(),o("div",c,[d(y,{title:h.dialog.title,modelValue:h.dialog.isShowDialog,"onUpdate:modelValue":l[11]||(l[11]=e=>h.dialog.isShowDialog=e),width:"769px"},{footer:t((()=>[r("span",b,[d(T,{onClick:F,size:"default"},{default:t((()=>l[12]||(l[12]=[u("取 消")]))),_:1}),d(T,{type:"primary",onClick:w,size:"default"},{default:t((()=>[u(i(h.dialog.submitTxt),1)])),_:1})])])),default:t((()=>[d(U,{ref_key:"userDialogFormRef",ref:V,model:h.ruleForm,size:"default","label-width":"90px"},{default:t((()=>[d(S,{gutter:35},{default:t((()=>[d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"账户名称"},{default:t((()=>[d(a,{modelValue:h.ruleForm.userName,"onUpdate:modelValue":l[0]||(l[0]=e=>h.ruleForm.userName=e),placeholder:"请输入账户名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"用户昵称"},{default:t((()=>[d(a,{modelValue:h.ruleForm.userNickname,"onUpdate:modelValue":l[1]||(l[1]=e=>h.ruleForm.userNickname=e),placeholder:"请输入用户昵称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"关联角色"},{default:t((()=>[d(_,{modelValue:h.ruleForm.roleSign,"onUpdate:modelValue":l[2]||(l[2]=e=>h.ruleForm.roleSign=e),placeholder:"请选择",clearable:"",class:"w100"},{default:t((()=>[d(x,{label:"超级管理员",value:"admin"}),d(x,{label:"普通用户",value:"common"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"部门"},{default:t((()=>[d(v,{options:h.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"请选择部门",clearable:"",class:"w100",modelValue:h.ruleForm.department,"onUpdate:modelValue":l[3]||(l[3]=e=>h.ruleForm.department=e)},{default:t((({node:e,data:l})=>[r("span",null,i(l.deptName),1),e.isLeaf?n("",!0):(s(),o("span",p," ("+i(l.children.length)+") ",1))])),_:1},8,["options","modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"手机号"},{default:t((()=>[d(a,{modelValue:h.ruleForm.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>h.ruleForm.phone=e),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"邮箱"},{default:t((()=>[d(a,{modelValue:h.ruleForm.email,"onUpdate:modelValue":l[5]||(l[5]=e=>h.ruleForm.email=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"性别"},{default:t((()=>[d(_,{modelValue:h.ruleForm.sex,"onUpdate:modelValue":l[6]||(l[6]=e=>h.ruleForm.sex=e),placeholder:"请选择",clearable:"",class:"w100"},{default:t((()=>[d(x,{label:"男",value:"男"}),d(x,{label:"女",value:"女"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"账户密码"},{default:t((()=>[d(a,{modelValue:h.ruleForm.password,"onUpdate:modelValue":l[7]||(l[7]=e=>h.ruleForm.password=e),placeholder:"请输入",type:"password",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"账户过期"},{default:t((()=>[d(D,{modelValue:h.ruleForm.overdueTime,"onUpdate:modelValue":l[8]||(l[8]=e=>h.ruleForm.overdueTime=e),type:"date",placeholder:"请选择",class:"w100"},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t((()=>[d(f,{label:"用户状态"},{default:t((()=>[d(N,{modelValue:h.ruleForm.status,"onUpdate:modelValue":l[9]||(l[9]=e=>h.ruleForm.status=e),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])])),_:1})])),_:1}),d(g,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t((()=>[d(f,{label:"用户描述"},{default:t((()=>[d(a,{modelValue:h.ruleForm.describe,"onUpdate:modelValue":l[10]||(l[10]=e=>h.ruleForm.describe=e),type:"textarea",placeholder:"请输入用户描述",maxlength:"150"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["title","modelValue"])])}}});export{f as default};
