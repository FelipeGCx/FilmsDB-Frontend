"use strict";(self["webpackChunkfilmsdbfrontend"]=self["webpackChunkfilmsdbfrontend"]||[]).push([[843],{7745:function(e,t){t["Z"]={methods:{toTitleCase(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}}}},9146:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=a(3396);const s={key:2,class:"sec"},n={key:0,ref:"section"};function r(e,t,a,r,l,o){const g=(0,i.up)("the-loading"),u=(0,i.up)("the-error"),d=(0,i.up)("the-main-title"),p=(0,i.up)("the-content-visualization"),h=(0,i.up)("the-pagination"),c=(0,i.up)("the-empty");return(0,i.wg)(),(0,i.iD)("main",null,[e.loading?((0,i.wg)(),(0,i.j4)(g,{key:0})):e.error?((0,i.wg)(),(0,i.j4)(u,{key:1,refetch:!0,onReload:t[0]||(t[0]=e=>o.reloadTheQuery())})):l.details?((0,i.wg)(),(0,i.iD)("div",s,[l.details.page.totalItems>1?((0,i.wg)(),(0,i.iD)("section",n,[(0,i.Wm)(d,{title:o.title,padding:l.space},null,8,["title","padding"]),(0,i.Wm)(p,{contentDetails:l.details.data,isAdmin:e.isAdmin,onFilled:o.toTitle},null,8,["contentDetails","isAdmin","onFilled"]),(0,i.Wm)(h,{onChangePage:o.newPage,pagination:l.details.page},null,8,["onChangePage","pagination"])],512)):((0,i.wg)(),(0,i.j4)(c,{key:1}))])):((0,i.wg)(),(0,i.j4)(c,{key:3}))])}var l=a(7457),o=a(1926),g=a(9001),u=a(8833),d=a(5232),p=a(535),h=a(4476),c=a(8339),m=a(7745),f=a(869),y={name:"SagaView",components:{TheMainTitle:l.Z,TheContentVisualization:g.Z,ThePagination:o.Z,TheError:d.Z,TheEmpty:c.Z,TheLoading:p.Z},mixins:[h.Z,m.Z,f.Z],data(){return{details:null,space:"0vw"}},computed:{actualPage(){let e=parseInt(this.$route.query.page)||1;try{return e>this.details.page.totalPages?e=this.details.page.totalPages:e<=0&&(e=1),e}catch{return e}},filmsSaga(){return this.$route.query.saga},title(){return`Saga ${this.$route.query.saga||""}`}},methods:{newPage(e){window.scrollTo(0,0),this.$router.push({query:{saga:this.filmsSaga,page:e}})},toTitle(e){e=e>=240?(this.$refs.section.offsetWidth-e)/2:0,this.space=` ${e}px`},reloadTheQuery(){this.error=!1,this.sagas=null,this.$apollo.queries.sagas.refetch()}},apollo:{details:{query:u.ZP`
        query GetFilmsBySaga($filmsSaga: String, $page: Int) {
          getFilmsBySaga(filmsSaga: $filmsSaga, page: $page) {
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
            page {
              totalItems
              size
              totalPages
              currentPage
            }
            error
          }
        }
      `,variables(){return{filmsSaga:this.filmsSaga,page:this.actualPage}},update(e){return e.getFilmsBySaga},error(){this.error=!0},watchLoading(e){this.loading=e}}}},w=a(89);const S=(0,w.Z)(y,[["render",r],["__scopeId","data-v-7cb1610a"]]);var T=S}}]);
//# sourceMappingURL=843.b0d79b06.js.map