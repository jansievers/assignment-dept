<template>
   <div>
      <ul class="personList">
         <li v-for="item in listItems" class="personList__item">
            {{ item.name.title }} {{ item.name.first }} {{ item.name.last }}
         </li>
      </ul>
   </div>
</template>

<script>
import * as dataService from '../services/DataService';
export default {
   data: () => {
      return {
         listItems: []
      }
   },
   methods: {
      fetchListItems() {
         dataService.getPersons()
         .then((res) => {
            this.listItems = dataService.normalize(res);
         });
      }
   },
   beforeMount(){
      this.fetchListItems()
 },
   
}
</script>

<style>
   /* Todo add sass */ 
   .personList {
      list-style: none;
      margin: 0;
      padding: 0;
   }
   .personList__item {
      border: 1x solid grey;
      box-shadow: 2px 2px 10px grey;
      margin-bottom: 20px;
      padding: 20px;
   }
   .personList__item:hover {
      cursor: pointer;
      opacity: 0.7;
   }
</style>