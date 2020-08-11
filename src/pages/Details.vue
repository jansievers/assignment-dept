<template>
   <div>
      <h1>{{ details.title }} {{ details.firstname }} {{ details.lastname }}</h1>
      <ul>
         <li>Birthday: <strong>{{ details.birthday }}</strong></li>
         <li>Location: <strong>{{ details.location }}</strong></li>
         <li>Email: <strong>{{ details.email }}</strong></li>
         <li>Phone Number: <strong>{{ details.phone }}</strong></li>
      </ul>

      "birthday": "1994-02-23T07:01:10.300Z", "location": "Russell", "email": "arthur.levesque@example.com", "phone": "182-462-2368" }
   </div>
</template>

<script>
export default {
   data: () => {
      return {
         details: {}
      }
   },
   methods: {
      
   },
   mounted: function() {
        this.details = this.$route.query  
   }
}
</script>