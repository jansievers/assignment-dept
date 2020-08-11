<template>
   <div>
      <p>List</p>
      <ul>
         <li v-for="item in listItems">
            {{ item.name.first }} {{ item.name.last }}
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