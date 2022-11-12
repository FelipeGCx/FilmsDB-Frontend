"use strict";(self["webpackChunkfilmsdbfrontend"]=self["webpackChunkfilmsdbfrontend"]||[]).push([[639],{6900:function(e,t,i){i.r(t),i.d(t,{default:function(){return V}});var a=i(3396);const r={key:2,class:"sec"},s={key:0,ref:"section"};function n(e,t,i,n,l,o){const h=(0,a.up)("the-loading"),u=(0,a.up)("the-error"),p=(0,a.up)("the-main-title"),d=(0,a.up)("the-filters"),g=(0,a.up)("the-content-visualization"),m=(0,a.up)("the-pagination"),f=(0,a.up)("the-empty");return(0,a.wg)(),(0,a.iD)("main",null,[e.loading?((0,a.wg)(),(0,a.j4)(h,{key:0})):e.error?((0,a.wg)(),(0,a.j4)(u,{key:1,refetch:!0,onReload:t[0]||(t[0]=e=>o.reloadTheQuery())})):l.details?((0,a.wg)(),(0,a.iD)("div",r,[l.details.page.totalItems>1?((0,a.wg)(),(0,a.iD)("section",s,[(0,a.Wm)(p,{title:o.title(),padding:l.space},null,8,["title","padding"]),(0,a.Wm)(d,{onDoFilter:o.doFilter,padding:l.space},null,8,["onDoFilter","padding"]),(0,a.Wm)(g,{contentDetails:l.details.data,isAdmin:e.isAdmin,onFilled:o.toTitle},null,8,["contentDetails","isAdmin","onFilled"]),(0,a.Wm)(m,{onChangePage:o.newPage,pagination:l.details.page},null,8,["onChangePage","pagination"])],512)):((0,a.wg)(),(0,a.j4)(f,{key:1}))])):((0,a.wg)(),(0,a.j4)(f,{key:3}))])}var l=i(7457),o=i(1926),h=i(9001),u=i(9242);const p=e=>((0,a.dD)("data-v-d28078b2"),e=e(),(0,a.Cn)(),e),d=p((()=>(0,a._)("label",{for:"type"},"Type",-1))),g=p((()=>(0,a._)("option",{value:"all"},"All",-1))),m=p((()=>(0,a._)("option",{value:"movie"},"Movie",-1))),f=p((()=>(0,a._)("option",{value:"anime"},"Anime",-1))),y=p((()=>(0,a._)("option",{value:"serie"},"Serie",-1))),c=[g,m,f,y],v=p((()=>(0,a._)("label",{for:"year"},"Year",-1))),w=["max"],T=p((()=>(0,a._)("label",{for:"note"},"Note",-1))),$=p((()=>(0,a._)("button",{type:"submit"},"Filter",-1)));function b(e,t,i,r,s,n){const l=(0,a.up)("the-order-note");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[4]||(t[4]=(0,u.iM)(((...e)=>n.doFilter&&n.doFilter(...e)),["prevent"])),id:"formFilter"},[d,(0,a.wy)((0,a._)("select",{name:"type",id:"type","onUpdate:modelValue":t[0]||(t[0]=e=>s.filter.type=e)},c,512),[[u.bM,s.filter.type]]),v,(0,a.wy)((0,a._)("input",{type:"number",min:"1896",max:(new Date).getFullYear(),maxlength:"4",minlength:"4",step:"1",name:"year","onUpdate:modelValue":t[1]||(t[1]=e=>s.filter.year=e),onKeyup:t[2]||(t[2]=(...e)=>n.evaluateLength&&n.evaluateLength(...e)),onChange:t[3]||(t[3]=(...e)=>n.evaluateMin&&n.evaluateMin(...e))},null,40,w),[[u.nr,s.filter.year]]),T,(0,a.Wm)(l,{onNote:n.setNote},null,8,["onNote"]),$],32)}const S=["src"];function k(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>n.changeState&&n.changeState(...e))},[(0,a._)("img",{src:n.image,alt:"order"},null,8,S)])}var F={data(){return{images:[i(7793),i(620),i(4945)],nstate:1,preState:0}},computed:{image(){return this.images[this.nstate]}},methods:{changeState(){switch(this.nstate){case 0:this.preState=this.nstate,this.nstate=1,this.$emit("note","none");break;case 1:0==this.preState?(this.preState=this.nstate,this.nstate=2,this.$emit("note","desc")):(this.preState=this.nstate,this.nstate=0,this.$emit("note","asc"));break;case 2:this.preState=this.nstate,this.nstate=1,this.$emit("note","none");break;default:this.preState=this.nstate,this.nstate=0,this.$emit("note","asc");break}}},mounted(){switch(this.$route.query.note){case"asc":this.nstate=0,this.preState=1;break;case"desc":this.nstate=2,this.preState=1;break;default:this.nstate=1,this.preState=0;break}}},_=i(89);const D=(0,_.Z)(F,[["render",k],["__scopeId","data-v-1b19c1aa"]]);var q=D;const N={props:{padding:{type:String,required:!0,default:"5rem"}},data(){return{filter:{type:null,year:null,note:null}}},components:{TheOrderNote:q},methods:{checkYear(e){e.target.value.length>3&&(e.target.value="1000")},doFilter(){this.$emit("doFilter",this.filter)},setNote(e){this.filter.note=e},evaluateLength(){this.filter.year=this.filter.year.toString().length>=4?parseInt(this.filter.year.toString().slice(0,4)):this.filter.year},evaluateMin(){this.filter.year=this.filter.year.toString().length<4?parseInt(this.addZeros(this.filter.year.toString(),4)):this.filter.year},addZeros(e,t){return e.padEnd(t,"0")}},mounted(){this.filter.type=this.$route.query.type||"all",this.filter.year=parseInt(this.$route.query.year)||(new Date).getFullYear()}},Y=()=>{(0,u.sj)((e=>({"50e583f8":e.padding})))},Z=N.setup;N.setup=Z?(e,t)=>(Y(),Z(e,t)):Y;var P=N;const I=(0,_.Z)(P,[["render",b],["__scopeId","data-v-d28078b2"]]);var C=I,x=i(8833),A=i(535),M=i(5232),W=i(8339),j=i(4476),L=i(869),B={name:"AllView",props:{needRefetch:{type:Boolean,default:!1}},components:{TheMainTitle:l.Z,TheFilters:C,TheContentVisualization:h.Z,ThePagination:o.Z,TheLoading:A.Z,TheError:M.Z,TheEmpty:W.Z},mixins:[j.Z,L.Z],data(){return{details:null,space:"0vw"}},computed:{actualPage(){let e=parseInt(this.$route.query.page)||1;try{return e>this.details.page.totalPages?e=this.details.page.totalPages:e<=0&&(e=1),e}catch{return e}},filmsType(){return this.$route.query.type||"all"},filmsYear(){return parseInt(this.$route.query.year)||(new Date).getFullYear()},filmsNote(){return this.$route.query.note||"none"}},watch:{needRefetch(){console.log("cambio refetch"),this.needRefetch&&(console.log("refetch true"),this.reloadTheQuery(),this.$emit("refecthDone"))}},methods:{newPage(e){window.scrollTo(0,0),this.$router.push({query:{type:this.filmsType,year:this.filmsYear,note:this.filmsNote,page:e}})},doFilter(e){this.$router.push({query:{type:e.type,year:e.year??(new Date).getFullYear(),note:e.note??"none",page:1}})},title(){let e={all:"All Content",anime:"Animes",serie:"Series",movie:"Movies"};return e[this.filmsType]},toTitle(e){e=e>=240?(this.$refs.section.offsetWidth-e)/2:0,this.space=` ${e}px`},reloadTheQuery(){this.error=!1,this.details=null,this.$apollo.queries.details.refetch()}},mounted(){this.$router.push({query:{type:this.filmsType,year:this.filmsYear,note:this.filmsNote,page:this.actualPage}})},apollo:{details:{query:x.ZP`
        query GetFilmsByType(
          $filmsType: String
          $filmsYear: Int
          $filmsNote: String
          $page: Int
        ) {
          getFilmsByType(
            filmsType: $filmsType
            filmsYear: $filmsYear
            filmsNote: $filmsNote
            page: $page
          ) {
            data {
              id
              type
              titleOG
              title
              year
              note
              language
              favorite
              category {
                id
                category
                svg
              }
              info
              poster
              season
              link
              saga {
                id
                saga
                svg
              }
            }
            error
            page {
              totalItems
              size
              totalPages
              currentPage
            }
          }
        }
      `,variables(){return{filmsType:this.filmsType,filmsYear:this.filmsYear,filmsNote:this.filmsNote,page:this.actualPage}},update(e){return e.getFilmsByType},error(e){this.tt=e,this.error=!0},watchLoading(e){this.loading=e}}}};const R=(0,_.Z)(B,[["render",n],["__scopeId","data-v-87472fd6"]]);var V=R},4945:function(e,t,i){e.exports=i.p+"img/arrow-down-filter.841b538e.svg"},7793:function(e,t,i){e.exports=i.p+"img/arrow-up-filter.185ef5f7.svg"},620:function(e,t,i){e.exports=i.p+"img/neutral-filter.a0afd930.svg"}}]);
//# sourceMappingURL=639.89731dd8.js.map