"use strict";(self["webpackChunkfilmsdbfrontend"]=self["webpackChunkfilmsdbfrontend"]||[]).push([[1],{7745:function(e,t){t["Z"]={methods:{toTitleCase(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}}}},2108:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=a(3396);const r={key:2,class:"sec"},o={key:0,ref:"section"};function n(e,t,a,n,s,l){const g=(0,i.up)("the-loading"),u=(0,i.up)("the-error"),d=(0,i.up)("the-main-title"),h=(0,i.up)("the-content-visualization"),p=(0,i.up)("the-pagination"),c=(0,i.up)("the-empty");return(0,i.wg)(),(0,i.iD)("main",null,[e.loading?((0,i.wg)(),(0,i.j4)(g,{key:0})):e.error?((0,i.wg)(),(0,i.j4)(u,{key:1,refetch:!0,onReload:t[0]||(t[0]=e=>l.reloadTheQuery())})):s.details?((0,i.wg)(),(0,i.iD)("div",r,[s.details.page.totalItems>1?((0,i.wg)(),(0,i.iD)("section",o,[(0,i.Wm)(d,{title:l.title,padding:s.space},null,8,["title","padding"]),(0,i.Wm)(h,{contentDetails:s.details.data,isAdmin:e.isAdmin,onFilled:l.toTitle},null,8,["contentDetails","isAdmin","onFilled"]),(0,i.Wm)(p,{onChangePage:l.newPage,pagination:s.details.page},null,8,["onChangePage","pagination"])],512)):((0,i.wg)(),(0,i.j4)(c,{key:1}))])):((0,i.wg)(),(0,i.j4)(c,{key:3}))])}var s=a(7457),l=a(1926),g=a(9001),u=a(8833),d=a(5232),h=a(535),p=a(4476),c=a(8339),y=a(7745),m=a(869),f={name:"CategoryView",components:{TheMainTitle:s.Z,TheContentVisualization:g.Z,ThePagination:l.Z,TheError:d.Z,TheEmpty:c.Z,TheLoading:h.Z},mixins:[p.Z,y.Z,m.Z],data(){return{details:null,space:"0vw"}},computed:{actualPage(){let e=parseInt(this.$route.query.page)||1;try{return e>this.details.page.totalPages?e=this.details.page.totalPages:e<=0&&(e=1),e}catch{return e}},filmsCategory(){return this.$route.query.category},title(){return`Category ${this.$route.query.category||""}`}},methods:{newPage(e){window.scrollTo(0,0),this.$router.push({query:{category:this.filmsCategory,page:e}})},toTitle(e){e=e>=240?(this.$refs.section.offsetWidth-e)/2:0,this.space=` ${e}px`},reloadTheQuery(){this.error=!1,this.categories=null,this.$apollo.queries.categories.refetch()}},apollo:{details:{query:u.ZP`
        query GetFilmsByCategory($filmsCategory: String, $page: Int) {
          getFilmsByCategory(filmsCategory: $filmsCategory, page: $page) {
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
      `,variables(){return{filmsCategory:this.filmsCategory,page:this.actualPage}},update(e){return e.getFilmsByCategory},error(e){this.tt=e,this.error=!0},watchLoading(e){this.loading=e}}}},C=a(89);const w=(0,C.Z)(f,[["render",n],["__scopeId","data-v-3bf1ea3b"]]);var T=w}}]);
//# sourceMappingURL=1.94cb7d9c.js.map