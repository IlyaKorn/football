import{_ as o}from"./Team.a749b5f9.js";import{_ as a,f as s,g as c,h as n,o as p}from"./entry.c5f2033a.js";import"./nuxt-link.db0fe568.js";const l={data(){return{currentTeam:null,coaches:null,players:[]}},created(){this.getTeam(),this.getPlayers()},methods:{getTeam(){fetch(`https://v3.football.api-sports.io/teams?id=${this.$route.params.id}`,{...s}).then(e=>e.json()).then(e=>{this.currentTeam=e.response[0]}).catch(e=>{console.error(e)})},getPlayers(){fetch(`https://v3.football.api-sports.io/players/squads?team=${this.$route.params.id}`,{...s}).then(e=>e.json()).then(e=>{this.players=e.response.players}).catch(e=>{console.error(e)})}}};function h(e,m,i,u,t,_){const r=o;return t.currentTeam?(p(),c(r,{key:0,team:t.currentTeam,isDetail:!0,coaches:t.coaches,players:t.players},null,8,["team","coaches","players"])):n("",!0)}const T=a(l,[["render",h]]);export{T as default};