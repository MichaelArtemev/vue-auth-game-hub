<template>
  <div class="hello">
    <div v-if="modalService.modal">
      <Modal :modalService="modalService" :searchElement='searchElement' :getModal='getModal' :closeModal='closeModal' :pushContact='pushContact'/>
    </div>     
    <h1>{{msg}}</h1>   
    <ContactsList :contacts='contacts' :getModal='getModal' :changeElement='changeElement' :removeElement='removeElement'/>        
  </div>  
</template>

<script>
//just js array with contacts
import fakeStorage from "../fake_storage/fakeStorage";
import ContactsList from '../components/UserBoardComponents/ContactsList.vue'

export default {
  components: {
    Modal: () => import('../components/UserBoardComponents/Modal.vue'),
    ContactsList: () => import('../components/UserBoardComponents/ContactsList.vue'),
    AddForm: () => import("../components/UserBoardComponents/ModalComponents/AddForm.vue"),  
	},
  data () {
    return {
      contacts: fakeStorage,
      msg: 'Contacts',      
      modalService:{        
        modal: false,
        add:false,
      },      
      searchContact:[],
      terms: false,
      indexResult:null,
      searchToken: false
    }
  },
  methods: { 
    getModal: function (e){      
      if(e.target.className === 'add-contact'){
        this.modalService.add = !this.modalService.add;
      }
      this.modalService.modal = !this.modalService.modal;
    },
    closeModal: function(){
      this.modalService.modal = !this.modalService.modal;
      if(this.modalService.add){
        this.modalService.add = !this.modalService.add;
      }      
    },
    pushContact: function(contact){      
      this.contacts.push({
          id: this.contacts.length,
          name:contact.name,
          phone:contact.phone
      });

      alert(`USER ${contact.name} PHONE ${contact.phone} ADDED`);            
      this.closeModal();
    },
    removeElement: function (index) {
      this.contacts.splice(index, 1);    
    }, 
    changeElement:function(item){         
      let answer = confirm("change NAME?");
      if(answer){
        let newName = prompt('write new Name');
        if(typeof newName != 'string'){
          alert("ONLY STRING VALUE");
          return;
        }
        item.name = newName;
      }
      let answerPhone = confirm("change Phone?");
      if(answerPhone){
        let newPhone = prompt('write new Phone');
        let re = /^[0-9]+$/g;
        if(!re.test(newPhone)){
          alert("ONLY NUMBER VALUE");
          return;
        }
        item.phone = +newPhone;
      } 
    },
    searchElement:function(object){
      if(!object){
        return alert('!');
      }
      console.log(object)
      let average = null;
      if(object.name){
        average = object.name
      }       
      average = object.phone

      console.log(average)
         
     let res = this.contacts.find((item, index)=>{
        return this.contacts[index].name === average || this.contacts[index].phone === average
      })
      console.log(res);
    }  
  }
}
</script>


<style scoped>
@import "../css/main.css";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
