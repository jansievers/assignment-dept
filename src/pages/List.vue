<template>
   <div>
      <ul class="personList">
         <li v-for="item in listItems" class="personList__item">
            <a :href="generateLinkWithParams(item)" class="personList__link">
               {{ item.name.title }} {{ item.name.first }} {{ item.name.last }}
            </a>
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
      },
      generateLinkWithParams(item) {
         console.log('current item', item.name.first);
         const urlString = `#/details?title=${encodeURIComponent(item.name.title)}&firstname=${encodeURIComponent(item.name.first)}&lastname=${encodeURIComponent(item.name.last)}&birthday=${encodeURIComponent(item.dob.date)}&location=${encodeURIComponent(item.location.city)}&email=${encodeURIComponent(item.email)}&phone=${encodeURIComponent(item.phone)}`;
         return urlString;
      }
   },
   beforeMount(){
      this.fetchListItems()
   }
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
   }
   .personList__link {
      display: block;
      padding: 20px;
   }
   .personList__link:hover {
      cursor: pointer;
      opacity: 0.7;
   }
</style>