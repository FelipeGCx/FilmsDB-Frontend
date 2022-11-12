"use strict";(self["webpackChunkfilmsdbfrontend"]=self["webpackChunkfilmsdbfrontend"]||[]).push([[260],{7745:function(e,t){t["Z"]={methods:{toTitleCase(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}}}},8785:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(3396);const n={key:2,ref:"section"};function o(e,t,a,o,r,s){const l=(0,i.up)("the-loading"),g=(0,i.up)("the-error"),u=(0,i.up)("the-main-title"),d=(0,i.up)("the-content-visualization"),p=(0,i.up)("the-pagination"),h=(0,i.up)("the-empty");return(0,i.wg)(),(0,i.iD)("main",null,[e.loading?((0,i.wg)(),(0,i.j4)(l,{key:0})):e.error?((0,i.wg)(),(0,i.j4)(g,{key:1,refetch:!0,onReload:t[0]||(t[0]=e=>s.reloadTheQuery())})):r.details?((0,i.wg)(),(0,i.iD)("section",n,[(0,i.Wm)(u,{title:"Favorites",padding:r.space},null,8,["padding"]),(0,i.Wm)(d,{contentDetails:r.details.data,isAdmin:e.isAdmin,onFilled:s.toTitle},null,8,["contentDetails","isAdmin","onFilled"]),(0,i.Wm)(p,{onChangePage:s.newPage,pagination:r.details.page},null,8,["onChangePage","pagination"])],512)):((0,i.wg)(),(0,i.j4)(h,{key:3}))])}var r=a(7457),s=a(1926),l=a(9001),g=a(8833),u=a(5232),d=a(535),p=a(4476),h=a(7745),c=a(8339),m=a(869),f={name:"CategoryView",components:{TheMainTitle:r.Z,TheContentVisualization:l.Z,ThePagination:s.Z,TheError:u.Z,TheLoading:d.Z,TheEmpty:c.Z},mixins:[p.Z,h.Z,m.Z],data(){return{details:null,space:"0vw"}},computed:{actualPage(){let e=parseInt(this.$route.query.page)||1;try{return e>this.details.page.totalPages?e=this.details.page.totalPages:e<=0&&(e=1),e}catch{return e}}},methods:{newPage(e){window.scrollTo(0,0),this.$router.push({query:{page:e}})},toTitle(e){e=e>=240?(this.$refs.section.offsetWidth-e)/2:0,this.space=` ${e}px`},reloadTheQuery(){this.error=!1,this.details=null,this.$apollo.queries.details.refetch()}},apollo:{details:{query:g.ZP`
        query GetFilmsByFavorite($filmsFavorite: Boolean, $page: Int) {
          getFilmsByFavorite(filmsFavorite: $filmsFavorite, page: $page) {
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
      `,variables(){return{filmsFavorite:!0,page:this.actualPage}},update(e){return e.getFilmsByFavorite},error(e){this.tt=e,this.error=!0},watchLoading(e){this.loading=e}}}},y=a(89);const v=(0,y.Z)(f,[["render",o],["__scopeId","data-v-f7503856"]]);var w=v}}]);
//# sourceMappingURL=260.58a0c294.js.map